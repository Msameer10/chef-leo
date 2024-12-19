import React from "react"

export default function Loader({ loading }) {
    const [loadingMessage, setLoadingMessage] = React.useState("Coming up with something...")

    const loadingMessages = [
        "Fetching your Recipe...",
        "Cooking up something special...",
        "Making sure that it tastes good...",
        "Prepping the perfect dish...",
        "Simmering the ingredients...",
        "Seasoning for the perfect flavor...",
        "Bringing your dish to life...",
        "Crafting the perfect recipe...",
        "Mixing the right ingredients...",
        "Spicing things up...",
        "Merging flavors into perfection...",
        "Almost there, just a few more steps...",
        "Tasting... and it's looking delicious!",
        "Cooking like a pro...",
        "Perfecting the recipe for you...",
        "Almost ready, hang tight...",
        "Whisking up something delicious...",
        "Gathering the perfect combination...",
        "Simmering your meal to perfection...",
        "Getting everything just right..."
    ]

    React.useEffect(() => {
        let messageIndex = 0
        let intervalId = null

        if (loading) {
            intervalId = setInterval(() => {
                setLoadingMessage(loadingMessages[messageIndex])
                messageIndex = (messageIndex + 1) % loadingMessages.length
            }, 1000)
        } else {
            setLoadingMessage("Loading...")
        }

        return () => clearInterval(intervalId)
    }, [loading])

    return (
        <div className="text-center mt-5">
            <div className="loading-dots">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p>{loadingMessage}</p>
        </div>
    )
}
