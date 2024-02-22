import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import axios from "axios";
import { Button, Card, Col, Progress, Row, Statistic } from "antd";
import {
  AppstoreFilled,
  ArrowDownOutlined,
  ArrowUpOutlined,
  ControlFilled,
  DatabaseFilled,
  FireFilled,
  TeamOutlined,
} from "@ant-design/icons";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import Image from "next/image";

const { Meta } = Card;

interface LogEntry {
  day: string;
  time: string;
  event_happening: string;
}

function Admin() {
  const [usernamelogin, setUsernamelogin] = useState("");
  const [usernamerole, setRoleusernamelogin] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("2023-09-03"); // Default date
  const [selectedTime, setSelectedTime] = useState("00:00"); // Default time
  const [temperature, setTemperature] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [xAxisCategories, setXAxisCategories] = useState();
  const [countuser, setUser] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("DASHBOARD");
  const [datalog, setDatalog] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // หน้าปัจจุบัน
  const [itemsPerPage] = useState(10); // จำนวนรายการต่อหน้า
  const [isDarkMode, setIsDarkMode] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datalog.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(datalog.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number}>
        <a href="#" onClick={() => setCurrentPage(number)}>
          {number}
        </a>
      </li>
    );
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [recaptchaResponse, setRecaptchaResponse] = useState<string>("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsername = localStorage.getItem("usernamelogin");
      const storedUsernameRole = localStorage.getItem("role");
      if (storedUsername) {
        setUsernamelogin(storedUsername);
      }

      if (storedUsernameRole) {
        setRoleusernamelogin(storedUsernameRole);
      }
    }
    // Fetch temperature and humidity data from the server when the date and time change
    const fetchLog = async () => {
      try {
        const response = await axios.get("/api/log");
        const data = response.data;

        const logdata = data.result.rows.map((entry) => ({
          day: entry.day,
          time: entry.time,
          event_happening: entry.event_happening,
        }));
        console.log(logdata);

        setDatalog(logdata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchLog();

    const fetchpix = async () => {
      try {
        const randomText = Math.random().toString(36).substring(7);
        const response = await fetch(`https://robohash.org/${randomText}.png`);
        if (response.ok) {
          setAvatarUrl(response.url);
        }
      } catch (error) {
        console.error("Error fetching avatar:", error);
      }
    };
    fetchpix();

    const fetchDataUser = async () => {
      try {
        const response = await axios.get("/api/user");
        const data = response.data;

        const countuser = data.result.count;
        const nameone = data.result.rows[4].username;
        const nametwo = data.result.rows[0].username;
        const namethree = data.result.rows[1].username;
        const namefour = data.result.rows[3].username;
        console.log(countuser);

        setUser(countuser);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataUser();
  }, [selectedDate, selectedTime]);

  
  const selectMenu = (menu) => {
    setSelectedMenu(menu);
  };

  const Darkmode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const options = {
    chart: {
      type: "area",
    },
    title: {
      text: "Temperature and Humidity",
    },
    xAxis: {
      categories: xAxisCategories,
    },
    yAxis: {
      title: {
        text: "value",
      },
    },
    series: [
      {
        name: "Temperature",
        data: temperature,
      },
      {
        name: "Humidity",
        data: humidity,
      },
    ],
  };

  return (
    <div className={`templatebg ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="secondbg">
        <div className="menu">
          <div className="icon" onClick={() => selectMenu("DASHBOARD")}>
            <AppstoreFilled />
          </div>
          <div className="icon" onClick={() => selectMenu("TEAM")}>
            <TeamOutlined />
          </div>
          <div className="icon" onClick={() => selectMenu("CONTROL")}>
            <ControlFilled />
          </div>
          <div className="icon" onClick={() => selectMenu("LOG")}>
            <DatabaseFilled />
          </div>
          <div className="icon" onClick={Darkmode}>
            <FireFilled />
          </div>
        </div>
        <div className="Senior">
          <h1>SENIOR PROJECT</h1>
        </div>
        <div className="wellcomelogin">
          <h3 style={{ textTransform: "uppercase" }}>
            WELCOME {usernamelogin}
          </h3>
        </div>
        {selectedMenu === "DASHBOARD" && (
          <div className="thirdbg">
            <h3>
              {selectedMenu}
            </h3>
          </div>
        )}

        {selectedMenu === "TEAM" && (
          <div className="TEAM">
            <Card
              className="1 bounce-in-left"
              hoverable
              style={{ width: 300 }}
              cover={
                <Image
                  alt="Professor Dr. Wisan Pathomchun"
                  src="https://www.bu.ac.th/uploads/professors/20230105094052_1p23gZ0mf2LULxu_5OPxgLGfPvFusU5.jpg"
                  width={300}
                  height={300}
                />
              }
            >
              <Meta
                title="ผศ.ดร.วิศาล พัฒน์ชู"
                description="FACULTY ADVISORS"
              />
            </Card>
            <Card
              className="2 bounce-in-left"
              hoverable
              style={{ width: 300 }}
              cover={
                <Image
                  alt="example"
                  src={"/src/public/chaiwat.jpg"}
                  width={300}
                  height={300}
                />
              }
            >
              <Meta title="CHAIWAT COMERINTHRON" description="SOFTWARE" />
            </Card>
            <Card
              className="3 bounce-in-left"
              hoverable
              style={{ width: 300 }}
              cover={
                <Image
                  alt="example"
                  src={"/src/public/lay.jpg"}
                  width={300}
                  height={300}
                />
              }
            >
              <Meta title="KANOKPORN HUDSREE" description="HARDWARE" />
            </Card>
            <Card
              className="4 bounce-in-left"
              hoverable
              style={{ width: 300 }}
              cover={
                <Image
                  alt="example"
                  src={"/src/public/Mio.jpg"}
                  width={300}
                  height={300}
                />
              }
            >
              <Meta title="KASSARAPON CHAYANANT" description="HARDWARE" />
            </Card>
            <Card
              className="5 bounce-in-left"
              hoverable
              style={{ width: 300 }}
              cover={
                <Image
                  src="/src/public/mean.jpg"
                  alt="example"
                  width={300}
                  height={300}
                />
              }
            >
              <Meta title="BENCHAPORN PHANMI" description="CLOUD" />
            </Card>
          </div>
        )}

        {selectedMenu === "CONTROL" && (
          <div className="control-content">Content for CONTROL menu</div>
        )}
        {selectedMenu === "LOG" && usernamerole === "admin" && (
          <div className="app-content">
            <div className="admin-log-table">
              <table>
                <thead>
                  <tr>
                    <th>วัน</th>
                    <th>เวลา</th>
                    <th>เหตุการณ์</th>
                  </tr>
                </thead>
                {currentItems.map((logEntry: LogEntry, index) => (
                  <tr key={index}>
                    <td>{logEntry.day}</td>
                    <td>{logEntry.time}</td>
                    <td>{logEntry.event_happening}</td>
                  </tr>
                ))}
              </table>
              <div className="pagination">
                <ul className="page-numbers">{renderPageNumbers}</ul>
              </div>
            </div>
          </div>
        )}

        {selectedMenu === "LOG" && usernamerole !== "admin" && (
          <div className="app-content">
            <h3>YOU DON'T HAVE PERMISSION TO VIEW</h3>
          </div>
        )}

        {selectedMenu === "DARKMODE" && <div className="dark-mode"></div>}
      </div>
    </div>
  );
}

export default Admin;