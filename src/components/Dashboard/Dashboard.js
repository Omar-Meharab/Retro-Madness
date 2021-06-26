import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {
    
    return (
        <div>
            <div style={containerStyle} className="grid grid-flow-row auto-rows-max">
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div className="m-auto p-5">
                    <h1 className="text-xl font-bold">This is Dashboard</h1>
                    <h4 className="text-xl font-bold">Navigate Through The Sidebar</h4>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;