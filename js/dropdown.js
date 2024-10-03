 /* 下拉選單上下箭頭切換 */
document.addEventListener('click', function (event) {
    const isDropdownButton = event.target.closest('.dropdown-btn');
    const dropdownArrows = document.querySelectorAll('.dropdown-arrow');

    if (!isDropdownButton) {
        dropdownArrows.forEach(arrow => {
            arrow.classList.remove('flip-arrow');
        });
    }
});

const dropdownButtons = document.querySelectorAll('.dropdown-btn');

dropdownButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        const dropdownArrow = event.currentTarget.querySelector('.dropdown-arrow');
        dropdownArrow.classList.toggle('flip-arrow');
    });
})