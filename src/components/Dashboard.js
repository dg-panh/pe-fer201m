import { Component } from "react";

class Dashboard extends Component {
    render() {
        return (
            <div className="container mt-3 mb-3">
                <ul class="nav">
                    <li>
                        <a class="nav-link">CATEGORIES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Lighting</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Bedding</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Bath and shower</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Dashboard;