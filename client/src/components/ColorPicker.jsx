import React from 'react';
import {SketchPicker} from "react-color";
import {useSnapshot} from "valtio";
import state from "../store/index.js";


const ColorPicker = () => {
    const snap = useSnapshot(state);
    return (
        <div className="absolute left-full ml-3">
            <SketchPicker
                color={snap.color}
                disableAlpha
                presetColors={[
                    '#8a2be2\t',
                    '#7fff00\t',
                    '#6495ed\t',
                    '#fff8dc\t',
                    '#8b008b\t',
                    '#483d8b\t',
                    '#ff1493\t',
                    '#f8f8ff\t',
                    '#f0e68c\t',
                    '#00ff00\t',
                    '#800000\t',
                    '#ff4500\t',
                    '#db7093\t',
                    ]}
                onChange={(color) => state.color = color.hex}
            />

        </div>
    );
};

export default ColorPicker;