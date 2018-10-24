import { saveAs } from 'file-saver'

export const binarySave = (name, data) => {
    const pathLength = 100000;
    const buffer = new ArrayBuffer(data.length);
    const temp = new DataView(buffer);
    const n32 = Math.floor(data.length / 4);
    const n16 = Math.floor((data.length - n32 * 4) / 2);
    const n8 = data.length - n32 * 4 - n16 * 2;
    let Kkey = 0;
    let K = -1;
    let APath = splitPath(n32, pathLength);
    if (APath === '') { // TODO: is this necessary check?
        APath=[0]
    }

    const timer = setInterval(() => {
        if (Kkey === 0) {
            Kkey = 1;
            K += 1;
        }
        for (var i = 0; i < APath[K]; i++) {
            temp.setUint32((i + K * pathLength) * 4, 
                data[(i + K * pathLength) * 4] * Math.pow(256, 3) +
                data[(i + K * pathLength) * 4 + 1] * Math.pow(256, 2) +
                data[(i + K * pathLength) * 4 + 2] * 256 +
                data[(i + K * pathLength) * 4 + 3]);
        }
        Kkey = 0;
        if (K + 1 === APath.length) {
            clearInterval(timer);
            if (n16 !== 0) {
                temp.setUint16(n32 * 4, data[n32 * 4] * 256 + data[n32 * 4 + 1]);
            }
            if (n8 !== 0) {
                temp.setUint8(n32 * 4 + n16 * 2, data[n32 * 4 + n16 * 2]);
            }
            saveAs(new Blob([buffer], { type: "binary" }), name);
        }
    }, 10);
}

function splitPath(dataLength, length) {
    const outSplit = Array.from({ length: Math.floor(dataLength / length) }, () => length);
    outSplit.push(dataLength % length);
    return outSplit;
}