import React from "react";
import { Stage, Layer, Rect, Line } from "react-konva";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

const RulerRender = ({ submitData }) => {
    const [loading, setLoading] = useState(false);

    const xCenterLeft = (window.innerWidth - submitData?.ruler) / 2;
    const yCenterTop =
        (window.innerHeight / 1.5 - (submitData?.line + 100)) / 2;

    const left = xCenterLeft;
    const right = xCenterLeft + submitData?.ruler;
    const lineList = [];

    const divide = (left, right, lineHeight) => {
        if (lineHeight > 0) {
            const centerPoint = (right - left) / 2;
            lineList.push(
                <Line
                    x={left}
                    y={yCenterTop}
                    points={[centerPoint, 0, centerPoint, lineHeight + 25]}
                    tension={0}
                    stroke="white"
                />
            );
            divide(left, left + centerPoint, lineHeight - 20);
            divide(left + centerPoint, right, lineHeight - 20);
        }
    };

    useEffect(() => {
        if (submitData?.line > 0 && submitData?.ruler > 0) {
            setLoading(true);
            divide(left, right, submitData.line);
        }
        setLoading(false);
    }, [submitData]);

    return (
        <Stage
            width={window.innerWidth}
            height={window.innerHeight / 1.5}
            style={{
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#f1f3f1",
            }}
            scale={3}
        >
            {loading ? (
                <Spinner animation="border" role="status" size="sm"></Spinner>
            ) : (
                <Layer>
                    <Rect
                        x={xCenterLeft}
                        y={yCenterTop}
                        width={submitData?.ruler}
                        height={submitData?.line + 100}
                        fill="#106cfc"
                    />
                    {lineList}
                </Layer>
            )}
        </Stage>
    );
};

export default RulerRender;
