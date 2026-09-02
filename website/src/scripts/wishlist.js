function parsePrice(element) {
    return Number.parseFloat(element.textContent?.replace(/[^0-9.]/g, "") ?? "") || 0;
}

export function initializeWishlist() {
    const items = document.querySelectorAll('.item input[type="checkbox"]');
    const totalElement = document.querySelector(".total-bar strong, #wishlist-total");

    if (!(totalElement instanceof HTMLElement) || items.length === 0) {
        return;
    }

    const updateTotal = () => {
        let total = 0;

        items.forEach((item) => {
            if (!(item instanceof HTMLInputElement) || !item.checked) {
                return;
            }

            const priceElement = item.closest(".item")?.querySelector(".price");

            if (priceElement) {
                total += parsePrice(priceElement);
            }
        });

        totalElement.textContent = `£${total.toFixed(2)}`;
    };

    items.forEach((item) => item.addEventListener("change", updateTotal));
    updateTotal();
}
