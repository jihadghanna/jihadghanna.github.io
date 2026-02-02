
// Generated JS

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Accordion: Open the first item if none are active
    const firstAccordion = document.querySelector('.accordion-item');
    if (firstAccordion) {
        firstAccordion.classList.add('active');
    }

    // Billing Address Toggle
    const billingCheckbox = document.getElementById('billing-same-as-shipping');
    const billingFields = document.getElementById('billing-fields');

    function toggleBilling() {
        if (!billingCheckbox || !billingFields) return;

        const inputs = billingFields.querySelectorAll('input, select, textarea');

        if (billingCheckbox.checked) {
            billingFields.style.display = 'none';
            inputs.forEach(input => input.disabled = true);
        } else {
            billingFields.style.display = 'block';
            inputs.forEach(input => input.disabled = false);
        }
    }

    if (billingCheckbox && billingFields) {
        // Set initial state
        toggleBilling();

        billingCheckbox.addEventListener('change', toggleBilling);
    }
});

function toggleAccordion(stepName) {
    const item = document.getElementById('step-' + stepName);

    // Close all other items (Optional: remove this loop to allow multiple open)
    const allItems = document.querySelectorAll('.accordion-item');
    allItems.forEach(function(i) {
        if (i !== item) {
            i.classList.remove('active');
        }
    });

    // Toggle current item
    item.classList.toggle('active');
}

function openTab(stepName) {
    // Get all elements with class="tab-content" and hide them
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(function(content) {
        content.classList.remove("active");
    });

    // Get all elements with class="tab-button" and remove the class "active"
    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    // Show the current tab, and add an "active" class to the button
    document.getElementById("tab-" + stepName).classList.add("active");

    // Find the button that corresponds to this step to set active state.
    const selector = `.tab-button[onclick="openTab('${stepName}')"]`;
    const buttons = document.querySelectorAll(selector);
    if (buttons.length > 0) {
        buttons[0].classList.add("active");
    }
}
