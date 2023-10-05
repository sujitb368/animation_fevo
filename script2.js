const div_len = document.querySelectorAll(".food_item");

function get_image (x){
    this.current_image = 0;
    this.images = x.getElementsByTagName("img");
    
    window.setInterval( ()=>{
        if(this.current_image + 1 == this.images.length){
            this.current_image = 0
        }else{
            this.images[this.current_image].classList.remove("add_block");
            this.current_image++;
        }        
        this.images[this.current_image].classList.add("add_block");   
    },3000)

}

div_len.forEach(element => {
    let c = new get_image(element);

});