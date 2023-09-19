const leftNextBtn = document.getElementById('left-next-btn');
const rightNextBtn = document.getElementById('right-next-btn');

let pagingItem = Array.from(document.getElementsByClassName('paging-item'));

pagingItem.forEach(pagItem => {
    pagItem.addEventListener('click', function () {
        var result = pagingItem.findIndex(p=>p.classList.contains('paging-item-active'));
        if(result!=-1){
            pagingItem[result].classList.remove('paging-item-active')
        }
        this.classList.add('paging-item-active');
    });
});