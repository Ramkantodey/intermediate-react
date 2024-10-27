import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {



    const subjectMarksData = [
        { "id": 1, "name": "Arif", "math": 78, "physics": 72, "chemistry": 80 },
        { "id": 2, "name": "Sumi", "math": 85, "physics": 88, "chemistry": 90 },
        { "id": 3, "name": "Rahim", "math": 92, "physics": 85, "chemistry": 87 },
        { "id": 4, "name": "Karim", "math": 70, "physics": 68, "chemistry": 75 },
        { "id": 5, "name": "Fahim", "math": 88, "physics": 90, "chemistry": 86 },
        { "id": 6, "name": "Shima", "math": 95, "physics": 91, "chemistry": 92 },
        { "id": 7, "name": "Nila", "math": 60, "physics": 65, "chemistry": 70 },
        { "id": 8, "name": "Anik", "math": 76, "physics": 78, "chemistry": 80 },
        { "id": 9, "name": "Zarin", "math": 89, "physics": 84, "chemistry": 88 },
        { "id": 10, "name": "Rafi", "math": 82, "physics": 79, "chemistry": 85 }
    ];





    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={"physics"}></YAxis>
                <Line type="monotone" dataKey="math" stroke='red'></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
            </LChart>

        </div>
    );
};

export default LineChart;