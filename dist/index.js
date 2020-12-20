"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
exports.resizeImage = (blob, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
            let image = new Image();
            image.src = typeof reader.result === 'string' ? reader.result : '';
            image.onload = function () {
                let canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
                    resolve(canvas.toDataURL(`image/base64`, 1));
                }
            };
        };
    });
});
