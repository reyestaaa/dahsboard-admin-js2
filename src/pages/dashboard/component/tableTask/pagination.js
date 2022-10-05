import React, {useState, useEffect } from "react";
import axios from "axios";
import { app } from "../../../../config/app"
import Pagination from "react-js-pagination";

import "./styles.css";

const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        const loading = async () => {
            setLoading(tre);
            const response = await axios.get(`${app}/indexSear.json`);
            setPosts(response.data);
            setLoading(false);
        };
        loading();
    },[]);

    return(
        <div className="d-flex justify-content-between mt-4">
            <p>Showing 1 to 5 of 100 entries</p>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <i class="bx bx-left-arrow-alt"></i> Previous
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            Next <i class="bx bx-right-arrow-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination