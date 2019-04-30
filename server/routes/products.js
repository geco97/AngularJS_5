const express = require('express');
const route = express.Router();

// http://localhost:5000/api/products/
route.get('/', function(req, res, next)  {
    res.status(200).json([
        { imagebook: "website/Media/Jacka/M3I21G048-B11@18.jpg", productname: "Bomberjacka", Category: "Jacka",manufacturer: "Massimo Dutti", price: 1190, rating: 4 },
        { imagebook: "website/Media/Jacka/M3I21G04B-K11@31.jpg", productname: "Blazer",Category: "Jacka",manufacturer: "Massimo Dutti", price: 1699, rating: 4 },
        { imagebook: "website/Media/Jacka/M3I21G04C-B11@22.jpg", productname: "Blazer",Category: "Jacka",manufacturer: "Massimo Dutti", price: 1799, rating: 4 },
        { imagebook: "website/Media/Jacka/C2341F00J-J14@3.jpg", productname: "FLASH FORWARD - Vindjacka ",Category: "Jacka",manufacturer: "Columbia", price: 599, rating: 4 },
        { imagebook: "website/Media/Jacka/M3I21G046-B11@14.jpg", productname: "Blazer",Category: "Jacka",manufacturer: "Massimo Dutti", price: 1699, rating: 4 },
        { imagebook: "website/Media/Jacka/M3I21U063-O11@18.jpg", productname: "Tunn jacka",Category: "Jacka",manufacturer: "Massimo Dutti", price: 999, rating: 4 },
        { imagebook: "website/Media/Jacka/NM321G04J-Q11@11.jpg", productname: "NMOLE JACKET - Jeansjacka ",Category: "Jacka",manufacturer: "NOISY MAY", price: 399, rating: 4 },
        { imagebook: "website/Media/Jacka/NL021G07I-C11@8.jpg", productname: "CROP UTILITY - Tunn jacka ",Category: "Jacka",manufacturer: "New Look", price: 299, rating: 4 },
        { imagebook: "website/Media/Jacka/K4421G02O-Q11@8859.1.jpg", productname: "Blazer",Category: "Jacka",manufacturer: "KIOMI", price: 399, rating: 4 },
        { imagebook: "website/Media/Jacka/K4421G02P-Q11@13.2.jpg", productname: "Kort kappa / rock ",Category: "Jacka",manufacturer: "KIOMI", price: 317, rating: 4 },
        { imagebook: "website/Media/Jacka/ON321U0AC-M11@16.jpg", productname: "ONLCANDICE UTILITY BELT JACKET - Jeansjacka ",Category: "Jacka",manufacturer: "ONlY", price: 529, rating: 4 },
        { imagebook: "website/Media/Jacka/ON321G0RL-Q11@16.jpg", productname: "Jacka i konstläder ",Category: "Jacka",manufacturer: "ONlY", price: 479, rating: 4 },
        { imagebook: "website/Media/Jacka/M3221G042-K11@7.jpg", productname: "Blazer",Category: "Jacka",manufacturer: "mint&berry", price: 379, rating: 4 },
        { imagebook: "website/Media/Jacka/M9121G0Q3-C11@14.jpg", productname: "MALIA - Blazer ",Category: "Jacka",manufacturer: "Mango", price: 799, rating: 4 },
        { imagebook: "website/Media/Jacka/LE221G02U-K11@3.jpg", productname: "EX BOYFRIEND TRUCKER - Jeansjacka ",Category: "Jacka",manufacturer: "Levi's", price: 1097, rating: 4 },
        { imagebook: "website/Media/Jacka/C7641K00F-Q11@18.jpg", productname: "FULL ZIP SUIT - Träningsset",Category: "Jacka",manufacturer: "Champion", price: 619, rating: 4 },
        { imagebook: "website/website/Media/Jacka/NI121G03H-Q11@3.jpg", productname: "Vindjacka ",Category: "Jacka",manufacturer: "NIKE", price: 799, rating: 4 },
        { imagebook: "website/Media/Jacka/EL941F00E-K11@10.jpg", productname: "TANAS - Vindjacka ",Category: "Jacka",manufacturer: "Ellesse", price: 474, rating: 4 },
        { imagebook: "website/Media/Jacka/NI121G03K-T11@10.jpg", productname: "Träningsjacka",Category: "Jacka",manufacturer: "NIKE", price: 849, rating: 4 },
        { imagebook: "website/Media/t-shirt/t-shirt.jpg", productname: "Helix Stereo ",Category: "T-Shirt",manufacturer: "Helix", price: 849, rating: 6 },
        { imagebook: "website/Media/t-shirt/t-shirt1.jpeg", productname: "Helix Stereo Colorful",Category: "T-Shirt",manufacturer: "Helix", price: 500, rating: 6 },
        { imagebook: "website/Media/t-shirt/t-shirt2.jpeg", productname: "Helix Stereo Colorful ",Category: "T-Shirt",manufacturer: "Helix", price: 400, rating: 6 },
        { imagebook: "website/Media/t-shirt/t-shirt3.jpeg", productname: "NIKE  Colorful T-Shirt",Category: "T-Shirt",manufacturer: "NIKE", price: 500, rating: 6 },
        { imagebook: "website/Media/t-shirt/t-shirt4.jpeg", productname: "NIKE Stereo T-Shirt",Category: "T-Shirt",manufacturer: "NIKE", price: 600, rating: 6 },
        { imagebook: "website/Media/t-shirt/t-shirt5.jpeg", productname: "NIKE Stereo T-Shirt",Category: "T-Shirt",manufacturer: "NIKE", price: 500, rating: 6 },
        { imagebook: "website/Media/t-shirt/t-shirt6.jpeg", productname: "Ellesse  T-Shirt",Category: "T-Shirt",manufacturer: "Ellesse", price: 400, rating: 6 },
        { imagebook: "website/Media/t-shirt/t-shirt7.jpeg", productname: "Ellesse  Colorful T-Shirt",Category: "T-Shirt",manufacturer: "Ellesse", price: 300, rating: 6 },
        { imagebook: "website/Media/t-shirt/t-shirt8.jpeg", productname: "Ellesse  T-Shirt",Category: "T-Shirt",manufacturer: "Ellesse", price: 500, rating: 6 },
        { imagebook: "website/Media/t-shirt/t-shirt9.jpeg", productname: "Mango  Colorful T-Shirt",Category: "T-Shirt",manufacturer: "Mango", price: 600, rating: 6 },
        { imagebook: "website/Media/t-shirt/t-shirt10.jpeg", productname: "Mango  Colorful T-Shirt",Category: "T-Shirt",manufacturer: "Mango", price: 400, rating: 6 },
        { imagebook: "website/Media/t-shirt/t-shirt11.jpeg", productname: "Mango  Colorful T-Shirt",Category: "T-Shirt",manufacturer: "Mango", price: 500, rating: 6 }
    ]);
});


module.exports = route;