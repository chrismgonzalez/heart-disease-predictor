import React, {useRef} from 'react'
import axios from 'axios';


export default function Form() {

    const [age, setAge] = React.useState("");
    const [gender, setGender] = React.useState("")
    const [trestbps, setTrestbps] = React.useState("")
    const [chol, setChol] = React.useState("")
    const [fbs, setFbs] = React.useState("")
    const [restecg, setRestecg] = React.useState("")
    const [thalach, setThalach] = React.useState("")
    const [exang, setExang] = React.useState("")
    const [cp, setCp] = React.useState("")
    const form = useRef(null)

    const handleSubmit = (e) => {
        console.log(`
        age: ${age}
        gender: ${gender}
        trestbps: ${trestbps}
        chol: ${chol}
        fbs: ${fbs}
        restecg: ${restecg}
        thalach: ${thalach}
        exang: ${exang}
        cp: ${cp}
        `);

        e.preventDefault()

        const data = new FormData(form.current)
        axios.post('http://host.docker.internal:80/predict', data)
            .then(res => {
                console.log(data)
                console.log(res.data)
            }).catch(error => {
                console.log(error)
        })


    }
    return (
        <form ref={form} onSubmit={handleSubmit}>
            <h2>Enter data</h2>
                <div>
                    <div>
                        Age:
                        <label>
                            <input
                                name="age"
                                type="age"
                                value={age}
                                placeholder="Your current age in years"
                                onChange={e => setAge(e.target.value)}
                                required />
                        </label>
                    </div>
                    <div>
                        <label>
                            Gender:
                            <select
                                name="gender"
                                value={gender}
                                onChange={e => setGender(e.currentTarget.value)}
                                required >
                                <option value="select">Select</option>
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        Resting Blood Pressure:
                        <label>
                            <input
                                name="trestbps"
                                type="trestbps"
                                value={trestbps}
                                placeholder="Blood pressure"
                                onChange={e => setTrestbps(e.target.value)}
                                required />
                        </label>
                    </div>
                    <div>
                        Serum Cholesterol in mg/dl:
                        <label>
                            <input
                                name="chol"
                                type="chol"
                                value={chol}
                                placeholder="Cholesterol"
                                onChange={e => setChol(e.target.value)}
                                required />
                        </label>
                    </div>
                    <div>
                        <label>
                            Fasting blood sugar:
                            <select
                                name="fbs"
                                value={fbs}
                                onChange={e => setFbs(e.currentTarget.value)}
                                required >
                                <option value="select">Select</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Resting ECG results:
                            <select
                                name="restecg"
                                value={restecg}
                                onChange={e => setRestecg(e.currentTarget.value)}
                                required >
                                <option value="select">Select</option>
                                <option value="0">Normal</option>
                                <option value="1">Having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05mV)</option>
                                <option value="2">Showing probably or definite left ventricular hypertrophy by Estes' criteria</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        Maximum heart rate during ecg:
                        <label>
                            <input
                                name="thalach"
                                type="thalach"
                                value={thalach}
                                placeholder="Max heartrate"
                                onChange={e => setThalach(e.target.value)}
                                required />
                        </label>
                    </div>
                    <div>
                        <label>
                            Chest pain during exercise?:
                            <select
                                name="exang"
                                value={exang}
                                onChange={e => setExang(e.currentTarget.value)}
                                required >
                                <option value="select">Select</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Chest pain type?:
                            <select
                                name="cp"
                                value={cp}
                                onChange={e => setCp(e.currentTarget.value)}
                                required >
                                <option value="0">No chest pain</option>
                                <option value="1">Typical angina(Chest pain due to emotional or physical stress</option>
                                <option value="2">Atypical angina(Discomfort in chest, no severe</option>
                                <option value="3">Non-anginal chest pain(Near sternum, oppressive or pressure like(Discomfort in chest, no severe</option>
                                <option value="4">Asymptomatic chest pain(Select if the above are not applicable)</option>
                            </select>
                        </label>
                    </div>
                </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}