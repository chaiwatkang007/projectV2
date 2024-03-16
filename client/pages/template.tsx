import React, { useState, useEffect, use } from "react";
import Highcharts, { setOptions } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import { Button, Card, Col, Checkbox, Row, Statistic, Alert } from "antd";
import {
  AppstoreFilled,
  ControlFilled,
  DatabaseFilled,
  FireFilled,
  TeamOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Marquee from 'react-fast-marquee';

ChartJS.register(ArcElement, Tooltip, Legend);

const { Meta } = Card;

interface LogEntry {
  day: string;
  time: string;
  event_happening: string;
}
interface Clientaa {
  user_id: string;
  client_name: string;
  age: string;
  gender: string;
  congenital_disease: string;
  medicine_name: string;
  times: string;
  T1: string;
  T2: string;
  T3: string;
  T4: string;
}

interface ChartDataState {
  labels: any;
  datasets: {
    label: string;
    data: any;
    backgroundColor: string;
  }[];
}

function Admin() {
  const [usernamelogin, setUsernamelogin] = useState("");
  const [usernamerole, setRoleusernamelogin] = useState("");
  const [uuiduser, setUUIDuserlogin] = useState("");
  const [selectedDate, setSelectedDate] = useState("2023-09-03"); // Default date
  const [selectedTime, setSelectedTime] = useState("00:00"); // Default time
  const [temperature, setTemperature] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [xAxisCategories, setXAxisCategories] = useState();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [countuser, setUser] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("DASHBOARD");
  const [datalog, setDatalog] = useState([]);
  const [DataClient, setClient] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // หน้าปัจจุบัน
  const [itemsPerPage] = useState(10); // จำนวนรายการต่อหน้า
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [chartData, setChartData] = useState<{
    labels: {
      day: string[];
      time: string[];
    };
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  } | null>(null);

  // control add clients
  const [clientName, setClientName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [pillName, setPillName] = useState("");
  const [medicine, setMedicine] = useState<string>("");
  const [conginitaldisease, setConginitaldisease] = useState<string>("");
  const [doses, setDoses] = useState<string[]>([]);
  const [chooseoption, setChoose] = useState<string[]>([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);

  // Medicine
  const [MedicineName, setMedicineName] = useState<string>("");
  const [numberMedicine, setNumberMedicine] = useState<number>();
  const [isMedicineFormVisible, setMedicineFormVisible] = useState(false);
  const [isClientFormVisible, setClientFormVisible] = useState(false);

  const [loading, setLoading] = useState(true);
  

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsername = localStorage.getItem("usernamelogin");
      const storedUsernameRole = localStorage.getItem("role");
      const storedUserUUID = localStorage.getItem("uuiduser");
      if (storedUsername) {
        setUsernamelogin(storedUsername);
      }

      if (storedUsernameRole) {
        setRoleusernamelogin(storedUsernameRole);
      }
      if (storedUserUUID) {
        setUUIDuserlogin(storedUserUUID);
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

    const fetchData = async () => {
      try {
        const response = await axios.get("/api/temp/");
        const datatemp = response.data;

        const dayLabels = datatemp.result.rows.map((entry) => entry.day);
        const timeLabels = datatemp.result.rows.map((entry) => entry.time);

        const chartDataa = {
          labels: {
            day: dayLabels,
            time: timeLabels,
          },
          datasets: [
            {
              label: "Temperature",
              data: datatemp.result.rows.map((entry) => entry.temp),
              backgroundColor: "#FF5733",
            },
            {
              label: "Humidity",
              data: datatemp.result.rows.map((entry) => entry.humidity),
              backgroundColor: "#33FF57",
            },
          ],
        };

        console.log(chartDataa);
        setChartData(chartDataa);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching temperature data from API:", error);
      }
    };
    fetchData();

    const fetchDataClients = async () => {
      try {
        const responseuser = await axios.get("/api/user");
        const responseclient = await axios.get("/api/client");
        const dataclient = responseclient.data;
        const datauser = responseuser.data;

        if (dataclient && dataclient.result && datauser && datauser.result) {
          if (usernamerole === "admin") {
            const countclientadmin = dataclient.result.rows.map((entry) => {
              const matchingUser = datauser.result.rows.find(
                (user) =>
                  user.id === entry.user_id || entry.user_id === user.username
              );

              if (matchingUser) {
                return {
                  client_name: entry.client_name,
                  user_id: matchingUser.username,
                  age: entry.age,
                  gender: entry.gender,
                  congenital_disease: entry.congenital_disease,
                  medicine_name: entry.medicine_name,
                  times: entry.times,
                  T1: entry.T1,
                  T2: entry.T2,
                  T3: entry.T3,
                  T4: entry.T4,
                };
              }
            });

            setClient(countclientadmin);
          }

          if (usernamerole === "user") {
            const userClientData = dataclient.result.rows
              .filter((entry) => entry.user_id === uuiduser)
              .map((entry) => {
                const matchingUsers = datauser.result.rows.find(
                  (user) =>
                    user.id === entry.user_id || entry.user_id === user.username
                );

                if (matchingUsers && matchingUsers.id === entry.user_id) {
                  return {
                    client_name: entry.client_name,
                    user_id: matchingUsers.username,
                    age: entry.age,
                    gender: entry.gender,
                    congenital_disease: entry.congenital_disease,
                    medicine_name: entry.medicine_name,
                    times: entry.times,
                    T1: entry.T1,
                    T2: entry.T2,
                    T3: entry.T3,
                    T4: entry.T4,
                  };
                }
              });
            setClient(userClientData);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataClients();
    setUserId(usernamelogin);
  }, [usernamerole, usernamelogin, uuiduser]);

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
      categories: chartData?.labels.day.map(
        (day, index) => day + " " + chartData.labels.time[index]
      ),
    },
    yAxis: {
      title: {
        text: "value",
      },
    },
    series: [
      {
        name: "temperature",
        data: chartData?.datasets[0]?.data || [],
      },
      {
        name: "humidity",
        data: chartData?.datasets[1]?.data || [],
      },
    ],
  };

  const handleSubmit = async () => {
    try {
      const result = await axios({
        method: "post",
        maxBodyLength: Infinity,
        url: "/api/client/addclient",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          user_id: userId,
          client_name: clientName,
          congenital_disease: conginitaldisease,
          medicine_name: medicine,
          age: age,
          gender: gender,
          times: doses.length,
          T1: doses[0],
          T2: doses[1],
          T3: doses[2],
          T4: doses[3],
        }),
      });
      await axios.post("/api/log/addlog", {
        event_happening: `${userId} added client ${clientName}`,
      });

      alert("ADD CLIENT NAME SUCESS");

      setClientName("");
      setConginitaldisease("");
      setMedicine("");
      setAge("");
      setGender("");
      setDoses([]);
    } catch (error) {
      console.error("Error: ", error);

      if (axios.isAxiosError(error)) {
        if (error.response) {
          setErrorMessage("Failed to add client");
        }
      }
    }
  };

  const handleSubmitPill = async () => {
    try {
      const result = await axios({
        method: "post",
        maxBodyLength: Infinity,
        url: "/api/medicine/addmedicine",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          md_name: MedicineName,
          md_input: numberMedicine,
          md_set: chooseoption[0],
        }),
      });
      await axios.post("/api/log/addlog", {
        event_happening: `${usernamelogin} added ${MedicineName} : ${numberMedicine} pills`,
      });

      alert("ADD MEDECINE NAME SUCESS");
    } catch (error) {
      console.error("Error: ", error);

      if (axios.isAxiosError(error)) {
        if (error.response) {
          setErrorMessage("Failed to add medicine");
        }
      }
    }

    console.log(MedicineName);
    console.log(numberMedicine);
    console.log(chooseoption[0]);

    setMedicineName("");
    setNumberMedicine(0);
  };

  const handleCheck = (checkedValues) => {
    if (checkedValues.length > 1) {
      checkedValues = checkedValues.slice(0, 1);
    } else {
      setChoose(checkedValues);
      setSelectedOption(checkedValues.length);
    }
  };

  const handleResetChooseOption = () => {
    setChoose([]); // รีเซ็ตการเลือก
    setSelectedOption(0); // รีเซ็ตจำนวนที่ถูกเลือก
  };

  const handleDoseChange = (checkedValues) => {
    if (checkedValues.length > 4) {
      checkedValues = checkedValues.slice(0, 4);
    } else {
      setDoses(checkedValues);
      setSelectedCount(checkedValues.length);
    }
  };

  const handleResetSelection = () => {
    setDoses([]); // รีเซ็ตการเลือก
    setSelectedCount(0); // รีเซ็ตจำนวนที่ถูกเลือก
  };

  const showMedicineForm = () => {
    setMedicineFormVisible(true);
    setClientFormVisible(false);
  };

  const showClientForm = () => {
    setMedicineFormVisible(false);
    setClientFormVisible(true);
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
            <div className="upper-half">
              <div className="medicine1">
                <div className=" aac">
                  <Statistic title="Active Users" value={"API คงเหลือ"} />
                </div>
              </div>
              <div className="medicine2">
                <div>
                  <Alert
                    message={
                      <Marquee pauseOnHover gradient={false}>
                         Wellcome to senior project computer and robotic of fourth year 
                        engineering from Bangkok university.
                      </Marquee>
                    }
                  />
                </div>
              </div>
              <div className="tableclient">
                {usernamerole === "admin" && (
                  <table className="clienttable">
                    <thead>
                      <tr>
                        <th>ผู้ดูแล</th>
                        <th>ผุ้ไข้</th>
                        <th>อายุ</th>
                        <th>เพศ</th>
                        <th>โรคประจำตัว</th>
                        <th>ชื่อยา</th>
                        <th>กิน/เวลา</th>
                        <th>ครั้งที่แรก</th>
                        <th>ครั้งที่สอง</th>
                        <th>ครั้งที่สาม</th>
                        <th>ครั้งที่สี่</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr></tr>
                    </tfoot>
                    <tbody>
                      {DataClient.map((entry: Clientaa, index1) => (
                        <tr key={index1}>
                          <td>{entry?.user_id}</td>
                          <td>{entry?.client_name}</td>
                          <td>{entry?.age}</td>
                          <td>{entry?.gender}</td>
                          <td>{entry?.congenital_disease}</td>
                          <td>{entry?.medicine_name}</td>
                          <td>{entry?.times}</td>
                          <td>{entry?.T1}</td>
                          <td>{entry?.T2}</td>
                          <td>{entry?.T3}</td>
                          <td>{entry?.T4}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {usernamerole === "user" && (
                  <table className="clienttable">
                    <thead>
                      <tr>
                        <th>CARAKER</th>
                        <th>CASE</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr></tr>
                    </tfoot>
                    <tbody>
                      {DataClient.map((entry: Clientaa, index1) => (
                        <tr key={index1}>
                          <td>{entry?.user_id}</td>
                          <td>{entry?.client_name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
            <div className="chart">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
          </div>
        )}

        {selectedMenu === "TEAM" && (
          <div className="TEAM">
            <div className="Card1">
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
          </div>
        )}

        {selectedMenu === "CONTROL" && (
          <div className="controlbg">
            <Row className="Row1">
              <Col span={12}>
                <div className="content1">
                  <label onClick={showMedicineForm}>
                    <h3>
                      <b>Add Medicine</b>
                    </h3>
                  </label>
                </div>
                {isMedicineFormVisible && (
                  <div className="contt1">
                    <div className="appp">
                      <label htmlFor="MedicineName">
                        <b>Medicinename</b>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Name Medicine"
                        name="MedicineName"
                        required
                        value={MedicineName}
                        onChange={(e) => setMedicineName(e.target.value)}
                      />

                      <label htmlFor="MedicineNumber">
                        <b>จำนวนยา</b>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Number Medicine"
                        name="MedicineNumber"
                        required
                        style={{ height: "40px" }}
                        value={numberMedicine || ""}
                        onChange={(e) =>
                          setNumberMedicine(
                            e.target.value === ""
                              ? undefined
                              : Number(e.target.value)
                          )
                        }
                      />
                      <Checkbox.Group
                        onChange={handleCheck}
                        value={chooseoption}
                        disabled={selectedOption === 1}
                      >
                        <Checkbox value="ช่อง A">ช่อง A</Checkbox>
                        <Checkbox value="ช่อง B">ช่อง B</Checkbox>
                      </Checkbox.Group>

                      <Button onClick={handleResetChooseOption}>
                        Reset Selection
                      </Button>

                      <Button
                        type="primary"
                        onClick={handleSubmitPill}
                        style={{ marginTop: "20px" }}
                      >
                        Add Medecine
                      </Button>
                    </div>
                  </div>
                )}
              </Col>
              <Col span={12}>
                <div className="content2">
                  <label onClick={showClientForm}>
                    <h3>
                      <b>Add Name Client</b>
                    </h3>
                  </label>
                </div>
                {isClientFormVisible && (
                  <div className="contt2">
                    <div className="addd">
                      <label htmlFor="userId">
                        <b>UserID</b>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter UserID"
                        name="userId"
                        required
                        value={usernamelogin}
                        readOnly
                      />

                      <label htmlFor="clientName">
                        <b>Client Name</b>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Client Name"
                        name="clientName"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                      />

                      <label htmlFor="conginitaldisease">
                        <b>Conginital Disease</b>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter conginital disease"
                        name="conginital disease"
                        required
                        value={conginitaldisease}
                        onChange={(e) => setConginitaldisease(e.target.value)}
                      />

                      <label htmlFor="medicine">
                        <b>Medicine</b>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Medicine"
                        name="medicine"
                        required
                        value={medicine}
                        onChange={(e) => setMedicine(e.target.value)}
                      />

                      <label htmlFor="age">
                        <b>Age</b>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Age"
                        name="age"
                        value={age}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                          setAge(e.currentTarget.value);
                        }}
                      />
                      <label htmlFor="gender">
                        <b>Gender</b>
                      </label>
                      <select
                        name="gender"
                        value={gender || ""}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      <label htmlFor="doses">
                        <b>Doses</b>
                      </label>
                      <input
                        type="text"
                        placeholder="Number of doses"
                        name="doses"
                        value={doses.length.toString()} // Use the length of the doses array
                        readOnly
                      />
                      <Checkbox.Group
                        onChange={handleDoseChange}
                        value={doses}
                        disabled={selectedCount === 4}
                      >
                        <Checkbox value="00:00">00:00</Checkbox>
                        <Checkbox value="01:00">01:00</Checkbox>
                        <Checkbox value="02:00">02:00</Checkbox>
                        <Checkbox value="03:00">03:00</Checkbox>
                        <Checkbox value="04:00">04:00</Checkbox>
                        <Checkbox value="05:00">05:00</Checkbox>
                        <Checkbox value="06:00">06:00</Checkbox>
                        <Checkbox value="7:00">7:00</Checkbox>
                        <Checkbox value="8:00">8:00</Checkbox>
                        <Checkbox value="9:00">9:00</Checkbox>
                        <Checkbox value="10:00">10:00</Checkbox>
                        <Checkbox value="11:00">11:00</Checkbox>
                        <Checkbox value="12:00">12:00</Checkbox>
                        <Checkbox value="13:00">13:00</Checkbox>
                        <Checkbox value="14:00">14:00</Checkbox>
                        <Checkbox value="15:00">15:00</Checkbox>
                        <Checkbox value="16:00">16:00</Checkbox>
                        <Checkbox value="17:00">17:00</Checkbox>
                        <Checkbox value="18:00">18:00</Checkbox>
                        <Checkbox value="19:00">19:00</Checkbox>
                        <Checkbox value="20:00">20:00</Checkbox>
                        <Checkbox value="21:00">21:00</Checkbox>
                        <Checkbox value="22:00">22:00</Checkbox>
                        <Checkbox value="23:00">23:00</Checkbox>
                      </Checkbox.Group>
                      <Button onClick={handleResetSelection}>
                        Reset Selection
                      </Button>

                      <Button type="primary" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
          </div>
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
            <h3 style={{ textTransform: "uppercase" }}>
              You Don&apos;t have permission to view
            </h3>
          </div>
        )}

        {selectedMenu === "DARKMODE" && <div className="dark-mode"></div>}
      </div>
    </div>
  );
}

export default Admin;
