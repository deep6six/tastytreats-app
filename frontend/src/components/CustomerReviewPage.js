/*import React, { useState, useEffect } from "react";
 import axios from "axios";

function CustomerReviewPage() {

  return(
<div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
    <div style={{width: 6128, height: 1238, left: 80, top: 338, position: 'absolute'}}>
        <img style={{width: 373, height: 268, left: 0, top: 59, position: 'absolute'}} src="https://via.placeholder.com/373x268" />
        <div style={{width: 269, height: 146, left: 374, top: 59, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Tenders</div>
        <div style={{width: 191, height: 51, left: 399, top: 276, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 436, top: 291, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 399, top: 276, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 436, top: 291, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 399, top: 276, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 436, top: 291, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 399, top: 276, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 464, top: 291, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 269, height: 146, left: 374, top: 59, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Tenders</div>
        <div style={{width: 191, height: 51, left: 399, top: 276, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 436, top: 291, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 399, top: 276, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 436, top: 291, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 399, top: 276, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 436, top: 291, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 399, top: 276, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 464, top: 291, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 143, height: 38, left: 423, top: 221, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 188.50, height: 53.73, left: 1046, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1082.29, top: 288.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1046, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1082.29, top: 288.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1046, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1082.29, top: 288.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1046, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1110, top: 289, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 1069, top: 216, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 1034, top: 45, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 672, top: 44, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <div style={{width: 188.50, height: 53.73, left: 1679, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1715.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1679, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1715.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1679, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1715.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1679, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1743, top: 288, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 1679, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1715.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1679, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1715.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1679, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1715.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1679, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1743, top: 288, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 1703, top: 214, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 1666, top: 43, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 344, height: 269, left: 1309, top: 59, position: 'absolute'}} src="https://via.placeholder.com/344x269" />
        <div style={{width: 269, height: 146, left: 374, top: 466, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Tenders</div>
        <div style={{width: 191, height: 51, left: 390, top: 672, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 427, top: 687, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 390, top: 672, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 427, top: 687, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 390, top: 672, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 427, top: 687, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 390, top: 672, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 455, top: 687, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 269, height: 146, left: 374, top: 466, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Tenders</div>
        <div style={{width: 191, height: 51, left: 390, top: 672, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 427, top: 687, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 390, top: 672, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 427, top: 687, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 390, top: 672, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 427, top: 687, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 390, top: 672, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 455, top: 687, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 143, height: 38, left: 414, top: 622, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 188.50, height: 53.73, left: 1032, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1068.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1032, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1068.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1032, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1068.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1032, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1096, top: 685, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 1032, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1068.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1032, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1068.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1032, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1068.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1033, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1096, top: 685, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 116.93, height: 22.13, left: 1749, top: 674, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 1049, top: 617, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 1034, top: 463, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 373, height: 268, left: 0, top: 915, position: 'absolute'}} src="https://via.placeholder.com/373x268" />
        <div style={{width: 269, height: 146, left: 374, top: 915, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Tenders</div>
        <div style={{width: 191, height: 51, left: 399, top: 1130, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 436, top: 1145, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 399, top: 1130, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 436, top: 1145, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 399, top: 1130, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 436, top: 1145, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 399, top: 1130, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 464, top: 1145, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 269, height: 146, left: 374, top: 915, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Tenders</div>
        <div style={{width: 191, height: 51, left: 399, top: 1130, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 436, top: 1145, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 399, top: 1130, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 436, top: 1145, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 399, top: 1130, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 436, top: 1145, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 191, height: 51, left: 399, top: 1130, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 118, height: 21, left: 464, top: 1145, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 143, height: 38, left: 441, top: 1075, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 188.50, height: 53.73, left: 1050, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1086.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1050, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1086.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1050, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1086.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1050, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1114, top: 1143, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 1050, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1086.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1050, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1086.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1050, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1086.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1050, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1114, top: 1143, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 1070, top: 1074, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 1034, top: 901, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 672, top: 900, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <div style={{width: 188.50, height: 53.73, left: 1680, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1716.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1680, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1716.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1680, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1716.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1680, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1744, top: 1144, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 1680, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1716.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1680, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1716.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1680, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1716.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 1680, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 1744, top: 1144, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 1703, top: 1070, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 1666, top: 899, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 344, height: 269, left: 1309, top: 915, position: 'absolute'}} src="https://via.placeholder.com/344x269" />
        <img style={{width: 373, height: 336, left: 0, top: 433, position: 'absolute'}} src="https://via.placeholder.com/373x336" />
        <img style={{width: 373, height: 336, left: 646, top: 433, position: 'absolute'}} src="https://via.placeholder.com/373x336" />
        <div style={{width: 188.50, height: 53.73, left: 1694, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{left: 1726, top: 617, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 1664, top: 473, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 338, height: 336, left: 1315, top: 433, position: 'absolute'}} src="https://via.placeholder.com/338x336" />
        <div style={{left: 12, top: 412, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>Healthy Options</div>
        <div style={{left: 12, top: 857, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>Main Courses</div>
        <div style={{left: 12, top: 0, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>Most Popular</div>
        <div style={{width: 116.93, height: 22.13, left: 1761, top: 685, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 3786, top: 285, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3822.29, top: 300.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3786, top: 285, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3822.29, top: 300.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3786, top: 285, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3822.29, top: 300.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3786, top: 285, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3850, top: 301, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 3809, top: 228, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 3774, top: 57, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 3412, top: 56, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3808.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3808.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3808.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3836, top: 697, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3808.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3808.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3808.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3773, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3836, top: 697, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 3789, top: 629, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 3774, top: 475, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3826.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3826.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3826.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3854, top: 1155, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3826.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3826.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3826.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3854, top: 1155, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 3810, top: 1086, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 3774, top: 913, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 3412, top: 912, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <img style={{width: 373, height: 336, left: 3386, top: 445, position: 'absolute'}} src="https://via.placeholder.com/373x336" />
        <div style={{left: 3563, top: 351, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{left: 3563, top: 1196, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{left: 3577, top: 730, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{width: 188.50, height: 53.73, left: 2416, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2452.29, top: 288.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2416, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2452.29, top: 288.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2416, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2452.29, top: 288.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2416, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2480, top: 289, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 2439, top: 216, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 2404, top: 45, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 2042, top: 44, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3085.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3085.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3085.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3113, top: 288, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3085.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3085.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3085.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3113, top: 288, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 3073, top: 214, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 3036, top: 43, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 344, height: 269, left: 2679, top: 59, position: 'absolute'}} src="https://via.placeholder.com/344x269" />
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2438.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2438.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2438.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2466, top: 685, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2438.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2438.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2438.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2403, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2466, top: 685, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 116.93, height: 22.13, left: 3119, top: 674, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 2419, top: 617, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 2404, top: 463, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2456.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2456.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2456.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2484, top: 1143, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2456.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2456.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2456.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2484, top: 1143, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 2440, top: 1074, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 2404, top: 901, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 2042, top: 900, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3086.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3086.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3086.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3114, top: 1144, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3086.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3086.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3086.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3114, top: 1144, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 3073, top: 1070, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 3036, top: 899, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 344, height: 269, left: 2679, top: 915, position: 'absolute'}} src="https://via.placeholder.com/344x269" />
        <img style={{width: 373, height: 336, left: 2016, top: 433, position: 'absolute'}} src="https://via.placeholder.com/373x336" />
        <div style={{width: 188.50, height: 53.73, left: 3064, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{left: 3096, top: 617, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 3073, top: 462, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 373, height: 336, left: 2685, top: 433, position: 'absolute'}} src="https://via.placeholder.com/373x336" />
        <div style={{left: 2193, top: 339, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{left: 2193, top: 1184, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{left: 2184, top: 739, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{left: 2826, top: 1190, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{left: 2817, top: 739, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{left: 2826, top: 339, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{width: 116.93, height: 22.13, left: 3131, top: 685, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 3786, top: 285, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3822.29, top: 300.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3786, top: 285, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3822.29, top: 300.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3786, top: 285, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3822.29, top: 300.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3786, top: 285, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3850, top: 301, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 3809, top: 228, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 3774, top: 57, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 3412, top: 56, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3808.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3808.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3808.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3836, top: 697, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3808.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3808.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3772, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3808.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3773, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3836, top: 697, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 3789, top: 629, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 3774, top: 475, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3826.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3826.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3826.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3854, top: 1155, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3826.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3826.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3826.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3790, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3854, top: 1155, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 3810, top: 1086, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 3774, top: 913, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 3412, top: 912, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <img style={{width: 373, height: 336, left: 3386, top: 445, position: 'absolute'}} src="https://via.placeholder.com/373x336" />
        <div style={{left: 3563, top: 351, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{left: 3563, top: 1196, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{left: 3577, top: 730, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{width: 188.50, height: 53.73, left: 2416, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2452.29, top: 288.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2416, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2452.29, top: 288.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2416, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2452.29, top: 288.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2416, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2480, top: 289, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 2439, top: 216, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 2404, top: 45, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 2042, top: 44, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3085.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3085.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3085.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3113, top: 288, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3085.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3085.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3085.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3049, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3113, top: 288, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 3073, top: 214, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 3036, top: 43, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 344, height: 269, left: 2679, top: 59, position: 'absolute'}} src="https://via.placeholder.com/344x269" />
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2438.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2438.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2438.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2466, top: 685, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2438.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2438.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2402, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2438.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2403, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2466, top: 685, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 116.93, height: 22.13, left: 3119, top: 674, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 2419, top: 617, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 2404, top: 463, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2456.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2456.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2456.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2484, top: 1143, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2456.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2456.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2456.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 2420, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 2484, top: 1143, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 2440, top: 1074, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 2404, top: 901, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 2042, top: 900, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3086.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3086.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3086.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3114, top: 1144, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3086.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3086.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3086.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 3050, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 3114, top: 1144, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 3073, top: 1070, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 3036, top: 899, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 344, height: 269, left: 2679, top: 915, position: 'absolute'}} src="https://via.placeholder.com/344x269" />
        <img style={{width: 373, height: 336, left: 2016, top: 433, position: 'absolute'}} src="https://via.placeholder.com/373x336" />
        <div style={{width: 188.50, height: 53.73, left: 3064, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{left: 3096, top: 617, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 3073, top: 462, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 373, height: 336, left: 2685, top: 433, position: 'absolute'}} src="https://via.placeholder.com/373x336" />
        <div style={{left: 2193, top: 339, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}></div>
        <div style={{left: 2193, top: 1184, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}></div>
        <div style={{left: 2184, top: 739, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}></div>
        <div style={{left: 2826, top: 1190, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{left: 2817, top: 739, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{left: 2826, top: 339, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}>...</div>
        <div style={{width: 116.93, height: 22.13, left: 3131, top: 685, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 5842, top: 285, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5878.29, top: 300.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5842, top: 285, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5878.29, top: 300.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5842, top: 285, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5878.29, top: 300.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5842, top: 285, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5906, top: 301, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 5865, top: 228, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 5830, top: 57, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 5468, top: 56, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <div style={{width: 188.50, height: 53.73, left: 5828, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5864.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5828, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5864.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5828, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5864.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5828, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5892, top: 697, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 5828, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5864.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5828, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5864.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5828, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5864.29, top: 696.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5829, top: 681, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5892, top: 697, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 5845, top: 629, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 5830, top: 475, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <div style={{width: 188.50, height: 53.73, left: 5846, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5882.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5846, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5882.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5846, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5882.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5846, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5910, top: 1155, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 5846, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5882.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5846, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5882.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5846, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5882.29, top: 1154.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5846, top: 1139, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5910, top: 1155, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 5866, top: 1086, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 5830, top: 913, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 5468, top: 912, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <img style={{width: 373, height: 336, left: 5442, top: 445, position: 'absolute'}} src="https://via.placeholder.com/373x336" />
        <div style={{left: 5619, top: 351, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}></div>
        <div style={{left: 5619, top: 1196, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}></div>
        <div style={{left: 5633, top: 730, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}></div>
        <div style={{width: 188.50, height: 53.73, left: 4472, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4508.29, top: 288.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4472, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4508.29, top: 288.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4472, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4508.29, top: 288.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4472, top: 273, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4536, top: 289, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 4495, top: 216, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 4460, top: 45, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 4098, top: 44, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <div style={{width: 188.50, height: 53.73, left: 5105, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5141.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5105, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5141.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5105, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5141.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5105, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5169, top: 288, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 5105, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5141.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5105, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5141.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5105, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5141.29, top: 287.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5105, top: 272, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5169, top: 288, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 5129, top: 214, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 5092, top: 43, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 344, height: 269, left: 4735, top: 59, position: 'absolute'}} src="https://via.placeholder.com/344x269" />
        <div style={{width: 188.50, height: 53.73, left: 4458, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4494.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4458, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4494.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4458, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4494.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4458, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4522, top: 685, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 4458, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4494.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4458, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4494.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4458, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4494.29, top: 684.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4459, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4522, top: 685, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 116.93, height: 22.13, left: 5175, top: 674, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 4475, top: 617, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 4460, top: 463, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <div style={{width: 188.50, height: 53.73, left: 4476, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4512.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4476, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4512.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4476, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4512.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4476, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4540, top: 1143, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 4476, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4512.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4476, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4512.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4476, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4512.29, top: 1142.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 4476, top: 1127, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 4540, top: 1143, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 4496, top: 1074, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 4460, top: 901, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 346.76, height: 283.42, left: 4098, top: 900, position: 'absolute'}} src="https://via.placeholder.com/347x283" />
        <div style={{width: 188.50, height: 53.73, left: 5106, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5142.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5106, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5142.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5106, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5142.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5106, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5170, top: 1144, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{width: 188.50, height: 53.73, left: 5106, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5142.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5106, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5142.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5106, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5142.29, top: 1143.80, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Add to Cart</div>
        <div style={{width: 188.50, height: 53.73, left: 5106, top: 1128, position: 'absolute', background: '#85144B'}} />
        <div style={{width: 116.93, height: 22.13, left: 5170, top: 1144, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
        <div style={{left: 5129, top: 1070, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 5092, top: 899, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 344, height: 269, left: 4735, top: 915, position: 'absolute'}} src="https://via.placeholder.com/344x269" />
        <img style={{width: 373, height: 336, left: 4072, top: 433, position: 'absolute'}} src="https://via.placeholder.com/373x336" />
        <div style={{width: 188.50, height: 53.73, left: 5120, top: 669, position: 'absolute', background: '#85144B'}} />
        <div style={{left: 5152, top: 617, position: 'absolute', color: '#85144B', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 40, wordWrap: 'break-word'}}>$ 12.99</div>
        <div style={{width: 298, left: 5129, top: 462, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Burger</div>
        <img style={{width: 373, height: 336, left: 4741, top: 433, position: 'absolute'}} src="https://via.placeholder.com/373x336" />
        <div style={{left: 4249, top: 339, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}></div>
        <div style={{left: 4249, top: 1184, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}></div>
        <div style={{left: 4240, top: 739, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}></div>
        <div style={{left: 4882, top: 1190, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}></div>
        <div style={{left: 4873, top: 739, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}></div>
        <div style={{left: 4882, top: 339, position: 'absolute', color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'}}></div>
        <div style={{width: 116.93, height: 22.13, left: 5187, top: 685, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>Select</div>
    </div>
    <div style={{padding: 10, left: 884, top: 665, position: 'absolute', background: 'white'}} />
    <div style={{left: 884, top: 677, position: 'absolute'}}>
        <div style={{width: 147, height: 62, padding: 10, left: 1, top: 0, position: 'absolute', background: 'white', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div><span style="color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'"></span><span style="color: '#85144B', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'">•</span><span style="color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'"></span></div>
        </div>
        <div style={{left: 1, top: 457, position: 'absolute'}}><span style="color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'"></span><span style="color: '#85144B', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'">•</span><span style="color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'"></span></div>
        <div style={{left: 0, top: 894, position: 'absolute'}}><span style="color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'"></span><span style="color: '#85144B', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'">•</span><span style="color: 'black', fontSize: 42, fontFamily: 'Inter', fontWeight: '400', lineHeight: 42, wordWrap: 'break-word'"></span></div>
    </div>
    <div style={{width: 51, height: 48, left: 1780, top: 33, position: 'absolute'}}>
        <div style={{width: 34, height: 36, left: 8.50, top: 6, position: 'absolute', border: '4px white solid'}}></div>
    </div>
    <div style={{width: 18, height: 16, left: 508, top: 54, position: 'absolute', background: 'black'}}></div>
    <div style={{width: 103, height: 74, left: 8, top: 136, position: 'absolute'}}>
        <div style={{width: 62.77, height: 41.62, left: 20.12, top: 16.19, position: 'absolute', border: '1.50px #85144B solid'}}></div>
    </div>
    <div style={{width: 2025, height: 136, left: 0, top: 0, position: 'absolute', background: '#85144B'}}></div>
    <div style={{width: 124, height: 68, left: 1565, top: 43, position: 'absolute'}} />
    <div style={{width: 109, height: 136, paddingTop: 44, paddingBottom: 68, paddingLeft: 37, paddingRight: 48, left: 0, top: 0, position: 'absolute', background: '#85144B', border: '3px black solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{width: 47, height: 43, border: '2px white solid'}}></div>
        </div>
    </div>
    <div style={{width: 119, height: 136, left: 109, top: 0, position: 'absolute', border: '3px black solid'}}>
        <div style={{width: 79.33, height: 102, left: 19.83, top: 17, position: 'absolute', border: '4px white solid'}}></div>
    </div>
    <img style={{width: 108, height: 120, left: 964, top: 5, position: 'absolute', border: '3px black solid'}} src="https://via.placeholder.com/108x120" />
    <div style={{width: 127, height: 135, left: 1789, top: 1, position: 'absolute', border: '3px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
        <div style={{padding: 8, background: 'rgba(133, 20, 75, 0)', borderRadius: 8}} />
    </div>
    <div style={{width: 119, height: 135, left: 1911, top: 1, position: 'absolute', border: '3px black solid'}}>
        <div style={{width: 109.08, height: 118.12, left: 4.96, top: 5.62, position: 'absolute', border: '4px white solid'}}></div>
    </div>
    <div style={{width: 579, height: 95, left: 729, top: 12, position: 'absolute', color: 'white', fontSize: 75, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Tasty       Treat</div>
    <div style={{width: 107, left: 1799, top: 41, position: 'absolute', color: 'white', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', lineHeight: 36, wordWrap: 'break-word'}}>Menu</div>
</div>

  )
 };


 export default CustomerReviewPage;


 import React, { useState, useEffect } from "react";
 import axios from "axios";

 const CustomerReviewPage = () => {
   const [reviews, setReviews] = useState([]);
   const [newReview, setNewReview] = useState({ customerId: "", reviewBody: "", rating: 0 });

   useEffect(() => {
     axios
       .get("http://localhost:8080/review")
       .then((response) => {
         setReviews(response.data);
       })
       .catch((error) => {
         console.error("Fetch error", error);
       });
   }, []);

   const handleSubmit = (e) => {
     e.preventDefault();
     axios
       .post("http://localhost:8080/review", newReview)
       .then((response) => {
         setReviews([...reviews, response.data]);
         setNewReview({ customerId: "", reviewBody: "", rating: 0 });
       })
       .catch((error) => {
         console.error("Post error", error);
       });
   };
   return (
     <div className="review">
     
       <h1>Customer Reviews</h1>
      
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           placeholder="Customer ID"
           value={newReview.customerId}
           onChange={(e) => setNewReview({ ...newReview, customerId: e.target.value })}
         />
         <textarea
           placeholder="Review Body"
          value={newReview.reviewBody}
           onChange={(e) => setNewReview({ ...newReview, reviewBody: e.target.value })}
         />
         <input
           type="number"
           placeholder="Rating"
           value={newReview.rating}
           onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
         />
         <button type="submit">Submit Review</button>
       </form>
      
       {reviews.map((review) => (
         <div key={review.id}>
           <p>Customer ID: {review.customerId}</p>
           <p>Review: {review.reviewBody}</p>
           <p>Rating: {review.rating}</p>
         </div>
        
       ))}
      
     </div>
   );
 };


 export default CustomerReviewPage;
*/





/*import React, { useState, useEffect } from "react";
import axios from "axios";
 import "./CustomerReviewPage.css";
 import { Link } from "react-router-dom";
const CustomerReviewPage = () => {
  const [customerId, setCustomerId] = useState('');
    const [reviewBody, setReviewBody] = useState('');
    const [rating, setRating] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch reviews when the component mounts
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:8080/reviews');
            setReviews(response.data);
        } catch (error) {
            console.error('There was an error fetching the reviews!', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const review = {
            customerId: parseInt(customerId),
            reviewBody,
            rating: parseInt(rating)
        };

        try {
            const response = await axios.post('http://localhost:8080/review', review);
            console.log('Review submitted:', response.data);
            setSuccess('Your review has been successfully submitted.');
            setError('');
            fetchReviews(); // Refresh the list of reviews
        } catch (error) {
            console.error('There was an error submitting the review!', error);
            setError('There was an error submitting the review.');
            setSuccess('');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/review/${id}`);
            console.log('Review deleted');
            fetchReviews(); // Refresh the list of reviews
        } catch (error) {
            console.error('There was an error deleting the review!', error);
            setError('There was an error deleting the review.');
        }
    };

    return (
      
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <h1>Customer Reviews</h1>
            <form onSubmit={handleSubmit} style={{ width: '50%', marginBottom: '20px' }}>
                <div>
                  
                    <label>Customer ID:</label>
                    <input
                        type="text"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Review:</label>
                    <textarea
                        value={reviewBody}
                        onChange={(e) => setReviewBody(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Rating:</label>
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                        min="1"
                        max="5"
                    />
                </div>
                <p>
      </p>
                <button type="submit"><Link to="/reviews">Submit A Review</Link></button>
                <Link to="/reviews">Submit A Review</Link>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && (
                    <div style={{ color: 'green', marginTop: '10px' }}>
                        <h3>Submit Successful</h3>
                        <p>Your submission has been submitted</p>
                        <button onClick={() => setSuccess('')}>Close</button>
                        
                    </div>
                )}
            </form>
            <h2>Previous Reviews</h2>
            <ul style={{ width: '50%' }}>
                {reviews.map((review) => (
                    <li key={review.id} style={{ marginBottom: '10px' }}>
                        <p>{review.reviewBody}</p>
                        <p>Rating: {review.rating}</p>
                        <button onClick={() => handleDelete(review.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default CustomerReviewPage;*/
/* Tim */
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./CustomerReviewPage.css";
import { Link } from "react-router-dom";
import sampleImage from "./CustomerReview/Customer Reviews.png";

const CustomerReviewPage = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState('');
    const [visibleCount, setVisibleCount] = useState(100); // Number of reviews to display initially

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:8080/review');
                setReviews(response.data);
            } catch (error) {
                console.error('There was an error fetching the reviews!', error);
                setError('There was an error fetching the reviews.');
            }
        };

        fetchReviews();
    }, []);

    const loadMoreReviews = useCallback(() => {
        setVisibleCount((prevCount) => Math.min(prevCount + 3, reviews.length));
    }, [reviews]);

    useEffect(() => {
        const handleScroll = () => {
            const container = document.querySelector('.review-container');
            if (container && container.scrollTop === 0) {
                // Load more reviews when scrolled to the top
                loadMoreReviews();
            }
        };

        const container = document.querySelector('.review-container');
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [loadMoreReviews, reviews]);

    // Function to render stars based on the rating
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} style={{ color: index < rating ? '#85144B' : '#ddd' }}>
                ★
            </span>
        ));
    };

    return (
        <div>
            <div className="containerh">
                <h1><img src={sampleImage} alt="Sample" /></h1>
            </div>
            <div className="container4">
                <div className="outer-container">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="review-container">
                        <ul>
                            {/* Display only the reviews up to a certain count */}
                            {reviews.slice(0, visibleCount).map((review) => (
                                <li key={review._id} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd' }}>
                                    <div className="right-corner">
                                        <span style={{ fontSize: '0.9em', color: '#888' }}>{review.createdDate}</span>
                                    </div>
                                    <h2>Review Title: {review.reviewTitle}</h2>
                                    <div>
                                        <p>Rating: {renderStars(review.rating)}</p>
                                    </div>
                                    <p>Review Body: {review.reviewBody}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to="/reviews" style={{ marginTop: '10px' }}>
                        <button type="button">Submit A Review</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviewPage;