document.addEventListener( 'DOMContentLoaded', function() {

    console.log( 'Script loaded!' );
    handleFloatingLabel();
    handleQualityRange()
});

function handleFloatingLabel() {
    let input = document.querySelector( '.js-name-input' ),
        label = document.querySelector( '.js-floating-label' );

    input.addEventListener('blur', function () {
        console.log( event );
        if ( input.value ){
            label.classList.add( 'is-floating' );
        }else {
            label.classList.remove( 'is-floating' );
        }
    });
}


function togglePassword(){
    let pwToggle = document.querySelector('.js-password-toggle-checkbox'),
        pwtextbox = document.querySelector( '.js-password-input');

    if (pwToggle.checked){
        pwtextbox.type = ("text");
    }else{
        pwtextbox.type = ("password");
    }
}

function handleQualityRange() {
    let rangeInput = document.querySelector('.js-quality-input'),
        rangeHolder = document.querySelector('.js-range-holder');

    rangeInput.addEventListener('input', function () {
        rangeHolder.setAttribute('data-value', rangeInput.value);
        rangeHolder.style.marginLeft = '${ rangeInput.value }%';
    });

function handleDropdownButton() {
        let dropdownButton = document.querySelector( '.js-dropdown-input' );

        dropdownButton.addEventListener('click', function (e) {
            e.preventDefault();
            dropdownButton.classList.toggle( 'is-opened');

        });

}
}