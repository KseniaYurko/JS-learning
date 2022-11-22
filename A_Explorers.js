let explorers = [   
    ["ex1", "pl1", "pl2", "pl3"],  
    ["ex2", "pl4", "pl2"],  
    ["ex3", "pl4", "pl1"],  
    ["ex4", "pl5", "pl3"]
];

function getPlases(explorers){
    const allPlases = explorers.reduce((acc, item) => {
        acc = [...acc, ...item.slice(1)];
        acc = Array.of(...new Set(acc));
        return acc; }, []);
    
    const res = allPlases.map((plase) => {
        const explorerOnPlase = [];

            explorers.forEach((explorers) => {
                if (explorers.includes(plase)) explorerOnPlase.push(explorers[0])
            })

        return [plase, ...explorerOnPlase]
    })

    return res;

}

console.log(getPlases(explorers));