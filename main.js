var bNameInput = document.getElementById("bookmarkName");
var bUrlInput = document.getElementById("bookmarkURL");

var bookmarkList = [];

if (localStorage.getItem("bookmarks") != null) {
  bookmarkList = JSON.parse(localStorage.getItem("bookmarks"));
  displayBookmarks();
} else {
  bookmarkList = [];
}

function addBookmark() {

    var bookmark = {
        name: bNameInput.value,
        url: bUrlInput.value,
  
      };
      bNameInput.value = ""
      bUrlInput.value=""

        bookmarkList.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));


      displayBookmarks();

  }

  function deleteBookmark(index) {
    bookmarkList.splice(index, 1);
    displayBookmarks(bookmarkList);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
  }
  


  bNameInput.addEventListener("input" ,function(){
    validateBName()
  })

  function validateBName(){
    var regex = /^[A-Z][a-z]{3,17}$/ ;
    var matched = regex.test(bNameInput.value)
    if(matched){
        bNameInput.classList.remove("is-invalid")
        bNameInput.classList.add("is-valid")
    }else{
        bNameInput.classList.add("is-invalid")
        bNameInput.classList.remove("is-valid")
    }

  }

  bUrlInput.addEventListener("input" ,function(){
    validateBUrl()
  })

  function validateBUrl(){
    var regex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,9}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/ ;
    var matched = regex.test(bUrlInput.value)
    if(matched){
        bUrlInput.classList.remove("is-invalid")
        bUrlInput.classList.add("is-valid")
    }else{
        bUrlInput.classList.add("is-invalid")
        bUrlInput.classList.remove("is-valid")
    }

  }


  var btnSubmit = document.getElementById("submitBtn")
  btnSubmit.addEventListener("click" , function(){
if(bNameInput.value != "" && bUrlInput.value != ""){
    addBookmark()
}
  })

function displayBookmarks() {
    var cartona = `` ;
    for (var i = 0; i < bookmarkList.length; i++) {
  
    
  
      cartona += `
                <tr>    
                    <td>1</td>
                    <td>${bookmarkList[i].name}</td>              
                    <td>
                    <a href="${bookmarkList[i].url}">
                      <button class="btn btn-visit btn-outline-success" data-index="0">
                        <i class="fa-solid fa-eye pe-2"></i>Visit
                      </button>
                    </a>
                    </td>
                    <td>
                      <button onclick="deleteBookmark(${i})" class="btn btn-delete pe-2 btn-outline-danger" data-index="0">
                        <i class="fa-solid fa-trash-can"></i>
                        Delete
                      </button>
                    </td>
                </tr>    
          `
    }
  
    document.getElementById('tableContent').innerHTML = cartona
  
  
  }
