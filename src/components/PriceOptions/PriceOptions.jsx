import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {


    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 25,
            "features": [
                "Access to gym equipment",
                "Locker facilities",
                "1 free personal training session per month",
                "Group fitness classes (limited)",
                "Basic mobile app access for workout tracking",
                "Free Wi-Fi",
                "Access during off-peak hours",
                "Discount on merchandise purchases (5%)"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 45,
            "features": [
                "Unlimited access to gym equipment",
                "Locker and shower facilities",
                "Access to cardio and strength training zones",
                "Advanced mobile app with workout tracking and meal planning",
                "Access to guest passes (2 per month)",
                "Free coffee and refreshments",
                "10% discount on all supplements"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 70,
            "features": [
                "24/7 gym access",
                "Locker, shower, and sauna facilities",
                "8 personal training sessions per month",
                "Free parking",
                "15% discount on premium services and supplements",
                "Private locker with personal code",
                "Weekly body composition analysis"
            ]
        }
    ]




    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Price in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};



export default PriceOptions;