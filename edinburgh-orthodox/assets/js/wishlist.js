const items = document.querySelectorAll('.item input[type="checkbox"]');
const totalElement = document.querySelector("#wishlist-total");

if (totalElement instanceof HTMLElement) {
    const updateTotal = () => {
        let total = 0;

        items.forEach((item) => {
            if (!(item instanceof HTMLInputElement) || !item.checked) {
                return;
            }

            const priceElement = item.closest(".item")?.querySelector(".price");
            const price = priceElement?.textContent?.replace(/[^0-9.]/g, "") ?? "";
            total += Number.parseFloat(price) || 0;
        });

        totalElement.textContent = `£${total.toFixed(2)}`;
    };

    items.forEach((item) => item.addEventListener("change", updateTotal));
    updateTotal();
}
