const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
    let inBeetween = false; //we will check it for every checkbox with forEach and when its true=checked//
    console.log(lastChecked);
    
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox =>  {
            console.log(checkbox)
            console.log(inBeetween)
            if (checkbox === this || checkbox === lastChecked) {
                inBeetween = !inBeetween;
                console.log(inBeetween)
                console.log(lastChecked);
                console.log("Starting to check them in beetween");
            }
            if (inBeetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this; //if we press shift at the first check, it is also lastChecked.
console.log(lastChecked);
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
    