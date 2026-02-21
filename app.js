// مێشکی هەژمارکردنی کارەبا بەپێی ئاستەکان (Slabs)
function calculateBill(units) {
    let totalCost = 0;
    let tiers = [
        { limit: 1500, rate: 18 },  // ئاستی یەکەم
        { limit: 1500, rate: 42 },  // ئاستی دووەم (لە ١٥٠١ تا ٣٠٠٠)
        { limit: 2000, rate: 120 }, // ئاستی سێیەم (لە ٣٠٠١ تا ٥٠٠٠)
        { limit: Infinity, rate: 180 } // ئاستی چوارەم (سەروو ٥٠٠٠)
    ];

    let remainingUnits = units;

    for (let tier of tiers) {
        if (remainingUnits <= 0) break;
        let unitsInThisTier = Math.min(remainingUnits, tier.limit);
        totalCost += unitsInThisTier * tier.rate;
        remainingUnits -= unitsInThisTier;
    }
    return totalCost;
}

// سیستەمی ئامۆژگاری ژیرانە
function getAdvice(units, budget) {
    let currentBill = calculateBill(units);
    if (currentBill > budget) {
        return "ئاگاداربە! تێچووەکەت لە بودجەکەت تێپەڕی. پێویستە کارەبای سپلیت یان گەرمکەری ئاو کەم بکەیتەوە.";
    } else {
        return "بارودۆخت باشە، بەردەوام بە لە پاراستنی کارەبا.";
    }
}
