(d => {
    let list1 = d.getElementById("list1");
    let list2 = d.getElementById("list2");

    let form = d.getElementById("form");
    let names = Array.from(form.querySelectorAll(".form-control"));

    function shuffle(array) {
        let m = array.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
        
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }      
        return array;
      }

    form.addEventListener("submit", event => {
        event.preventDefault();

        let shuffled = shuffle(names);

        let team1 = shuffled.slice(0, 5);
        let team2 = shuffled.slice(5, 10);

        team1.map(el => {
            let li = d.createElement("li");
            li.textContent = el.value;
            li.classList.add("list-group-item");
            el.value = "";
            list1.appendChild(li) 
        });

        team2.map(el => {
            let li = d.createElement("li");
            li.textContent = el.value;
            li.classList.add("list-group-item");
            el.value = "";
            list2.appendChild(li) 
        });
    });
})(document);
