export const IconItemComponent = (obj) => {
    const { icon, title, description } = obj;
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="text-center">
                <i
                    class="${icon}"
                    style="font-size: 48px;"
                ></i>
                </i>
                <h4 class="mb-2">${title}</h4>
                <p class="text-muted">${description}</p>
            </div>
        </div>
    `;
}