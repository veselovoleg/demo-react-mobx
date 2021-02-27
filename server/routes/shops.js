import shops from "../db/shopsData.js";

export function getShops(req, res) {
    setTimeout(() => {
        res.status(200).json({ data: Object.values(shops) });
    }, 1000);
}
