function formatCurrency(value) {
    return `£${value.toFixed(2)}`;
}

function createCartRow(title, quantity, total) {
    const row = document.createElement("div");
    const titleElement = document.createElement("span");
    const quantityElement = document.createElement("span");
    const priceElement = document.createElement("span");

    row.className = "row";
    titleElement.className = "rt";
    quantityElement.className = "rq";
    priceElement.className = "rp";

    titleElement.textContent = title;
    quantityElement.textContent = `× ${quantity}`;
    priceElement.textContent = formatCurrency(total);
    row.append(titleElement, quantityElement, priceElement);

    return row;
}

export function initializeBookshopCart() {
    const titleInput = document.querySelector("#bk-title");
    const priceInput = document.querySelector("#bk-price");
    const quantityInput = document.querySelector("#bk-qty");
    const addButton = document.querySelector("#bk-add");
    const rows = document.querySelector("#bk-rows");
    const totalElement = document.querySelector("#bk-total");

    if (
        !(titleInput instanceof HTMLInputElement) ||
        !(priceInput instanceof HTMLInputElement) ||
        !(quantityInput instanceof HTMLInputElement) ||
        !(addButton instanceof HTMLButtonElement) ||
        !(rows instanceof HTMLElement) ||
        !(totalElement instanceof HTMLElement)
    ) {
        return;
    }

    let cartTotal = 0;

    addButton.addEventListener("click", () => {
        const title = titleInput.value.trim();
        const price = Number.parseFloat(priceInput.value);
        const quantity = Math.max(Number.parseInt(quantityInput.value, 10) || 1, 1);

        if (!title || !Number.isFinite(price) || price < 0) {
            return;
        }

        const lineTotal = price * quantity;

        rows.append(createCartRow(title, quantity, lineTotal));
        cartTotal += lineTotal;
        totalElement.textContent = formatCurrency(cartTotal);

        titleInput.value = "";
        priceInput.value = "";
        quantityInput.value = "1";
        titleInput.focus();
    });
}
