const person = {
    name:'Eduardo',
    lastName: 'Vega',
    address: {
        line1: 'Brisas del Sur II',
        line2: 'Soyapango'
    },
    profiles: ['twitter', 'facebook', 'instagram'],
    printProfile: () => {
        person.profiles.map(
        profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript(){
    return(
        <>
            <div>{person.name} {person.lastName}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.line2}</div>
            <div>{person.profiles[3]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}