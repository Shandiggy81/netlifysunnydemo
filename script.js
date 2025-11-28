const SCIENCE = {
    grow: {
        title: "OYSTER MUSHROOMS",
        desc: "Spent grounds are pasteurized by the espresso machine, making them a perfect, contaminant-free substrate for mycelium.",
        science: "Biological Efficiency (BE) is approx 20-30%. This means 1kg of grounds yields roughly 200g-300g of fresh mushrooms over 2 flushes.",
        recipe: "1. Mix cooled grounds with mushroom spawn (10%).\n2. Pack into bags/buckets with air holes.\n3. Keep dark for 2 weeks, then humid/light for fruiting.",
        ratio: 0.25,
        unit: "kg",
        price: 30.0
    },
    burn: {
        title: "BIO-FUEL LOGS",
        desc: "Coffee grounds contain oils that burn hotter and longer than wood. Ideal for wood burners or pizza ovens.",
        science: "Calorific value ~5000 kcal/kg. Burns 20% hotter than kiln-dried wood due to lipid content.",
        recipe: "1. Dry grounds fully.\n2. Mix with wax binder or compress in a press.\n3. Creates dense logs burning for ~1 hour.",
        ratio: 0.8,
        unit: "Logs",
        price: 2.0
    },
    sell: {
        title: "BODY SCRUB",
        desc: "Caffeine stimulates blood flow (vasoconstriction) while grounds provide mechanical exfoliation.",
        science: "High margin conversion. Waste product becomes premium skincare.",
        recipe: "1. Mix 2 parts dry grounds, 1 part oil (coconut/almond).\n2. Add essential oils.\n3. Pot into 100g jars.",
        ratio: 5,
        unit: "Jars",
        price: 15.0
    }
};

let kg = 2.0;

calculate();

function syncSlider(val) {
    document.getElementById('inp-kg').value = val;
    calculate();
}

function calculate() {
    kg = parseFloat(document.getElementById('inp-kg').value) || 0;
    document.getElementById('slider-kg').value = kg;

    const growAmt = (kg * SCIENCE.grow.ratio).toFixed(1);
    const growVal = (growAmt * SCIENCE.grow.price).toFixed(0);
    document.getElementById('yield-grow').innerText = `${growAmt} ${SCIENCE.grow.unit}`;
    document.getElementById('val-grow').innerText = `$${growVal}`;

    const burnAmt = (kg * SCIENCE.burn.ratio).toFixed(1);
    const burnVal = (burnAmt * SCIENCE.burn.price).toFixed(0);
    document.getElementById('yield-burn').innerText = `${burnAmt} ${SCIENCE.burn.unit}`;
    document.getElementById('val-burn').innerText = `$${burnVal}`;

    const sellAmt = (kg * SCIENCE.sell.ratio).toFixed(0);
    const sellVal = (sellAmt * SCIENCE.sell.price).toFixed(0);
    document.getElementById('yield-sell').innerText = `${sellAmt} ${SCIENCE.sell.unit}`;
    document.getElementById('val-sell').innerText = `$${sellVal}`;

    document.getElementById('head-value').innerText = `$${sellVal}`;
}

function openInfo(type) {
    const data = SCIENCE[type];
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;
    document.getElementById('modal-science').innerText = data.science;
    document.getElementById('modal-recipe').innerText = data.recipe;
    document.getElementById('modal-info').classList.add('active');
}

function closeModal() {
    document.getElementById('modal-info').classList.remove('active');
}
