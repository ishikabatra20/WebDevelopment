const textArea = document.getElementById("comment");
const TextCount = document.querySelector('h2');
const wordCount = document.querySelector('h3');

textArea.addEventListener('input', ()=>{
    const text=textArea.value;
    //trim extra space
    const totalText = text.trim();
    //word count
    TextCount.textContent = `Text Count: ${totalText.length}`;
    const arr=totalText.split(" ");
    if(totalText===""){
        wordCount.textContent =`Word Count:0`;
    }else{
        wordCount.textContent = `Word Count: ${arr.length}`;

    }
    // multiple spaces
    // tabs
    // new lines
    const words = text
  .trim()
  .split(/\s+/)
  .filter(word => /[a-zA-Z0-9]/.test(word));

wordCount.textContent = `Word Count: ${words.length}`;
    
    

    

});