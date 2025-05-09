let breedId;
const apiKey = "live_muEdnuwriSm4mDs1D2Aj0ZQEVs7O3xR8TS6PtlYfNDO50NhJFuGh1vIZjZLDslnT";
let api_url = '';
let btn = document.getElementById("submit");

// Button click event
btn.addEventListener("click", async () => {
    const input = document.getElementById("response").value.toLowerCase().trim();

    try {
        // Fetch list of breeds
        const response = await fetch("https://api.thecatapi.com/v1/breeds", {
            headers: { "x-api-key": apiKey }
        });

        const breeds = await response.json();

        // Try to match user input with a breed name
        const match = breeds.find(breed => breed.name.toLowerCase().includes(input));

        if (!match) {
            alert("No matching breed found.");
            return;
        }

        breedId = match.id;
        api_url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
        getCat();

    } catch (error) {
        console.error("Error finding breed:", error);
    }
});

async function getCat() {
    try {
        const response = await fetch(api_url, {
            headers: { "x-api-key": apiKey }
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        const imageUrl = data[0].url;

        // Create or update image
        let img = document.getElementById("catImage");
        if (!img) {
            img = document.createElement("img");
            img.id = "catImage";
            img.style.marginTop = "10px";
            img.style.maxWidth = "300px";
            const formDiv = document.querySelector(".form");
            formDiv.appendChild(img);
        }

        img.src = imageUrl;

    } catch (error) {
        console.error("Error fetching cat image:", error);
    }
}


