function ContentComponent(){
    return `
    <div class="container">
        <select id="city">
            <option value="Hanoi">Hanoi</option>
            <option value="Ho Chi Minh City">Ho Chi Minh City</option>
            <option value="Danang">Da Nang</option>
          </select>
          
        <div id="list-forecast" class="row mt-5">
            
        </div>
    </div>
    `
}

const contentElement = document.getElementsByTagName('ContentComponent');
for(let item of contentElement){
    item.innerHTML = ContentComponent();
}


export default ContentComponent;