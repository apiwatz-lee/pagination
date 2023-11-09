import { useState, useEffect } from "react";
import "./App.css";
import MenuData from "./data/MenuData";

function App() {
  const [menu, setMenu] = useState(MenuData);
  const [foodInPage, setFoodInPage] = useState([]); //เพื่อนำไป generate ปุ่ม หน้า
  const [page, setPage] = useState(0);

  const pagination = () => {
    //วิธีการคำนวนจำนวนหน้า
    // จำนวนหน้า = จำนวนรายการทั้งหมด / จำนวนรายการที่ต้องการแสดงต่อหน้า
    const foodPerPage = 3; //จำนวนรายการที่เราต้องการแสดงในแต่ละหน้า
    const numberOfFood = MenuData.length; //จำนวนรายการทั้งหมด
    const pages = Math.ceil(numberOfFood / foodPerPage); //จำนวนหน้า
    console.log("page", pages);

    const newMenu = Array.from({ length: pages }, (data, index) => {
      //Array.from({length:pages}) --> สร้างจำนวน Array โดยอ้างอิงจำนวนหน้าในที่นี้คือ 5 ชุด Array
      const start = index * foodPerPage;
      //index 0 --> start = 0
      //index 1 --> start = 3
      //index 2 --> start = 6
      //index 3 --> start = 9
      //index 4 --> start = 12
      return MenuData.slice(start, start + foodPerPage);
      //index 0 --> slice (0,3) คือ เอา index ที่ 0 - 2
      //index 1 --> slice (3,6) คือ เอา index ที่ 3 - 5
      //index 2 --> slice (6,9) คือ เอา index ที่ 6 - 8
      //index 3 --> slice (9,12) คือ เอา index ที่ 9 - 11
      //index 4 --> slice (12,15) คือ เอา index ที่ 12 - 14
    });

    return newMenu;
  };

  useEffect(() => {
    const paginate = pagination();
    setFoodInPage(paginate);
    setMenu(paginate[page]);
  }, [page]);

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <div className="min-h-screen flex flex-col justify-evenly items-center bg-slate-900 text-white">
      <h1 className="text-3xl font-bold my-10">FoodCard | Pagination</h1>
      <div className="container w-[90%] h-auto flex flex-row flex-wrap justify-center gap-6 mb-10">
        {menu.map((item, index) => {
          return (
            <div
              className="card w-[300px] h-[350px] flex flex-col justify-center items-center gap-10 bg-white rounded-lg"
              key={index}
            >
              <img
                src={item.image_url}
                alt={item.name}
                className="w-[250px] h-[200px] object-cover rounded-md"
              />
              <h1 className="text-center text-black text-xl font-bold">
                {item.name}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="m-5 flex gap-5">
        {foodInPage.map((item, index) => {
          return (
            <button
              key={index}
              className={`border px-2 py-1 w-9 rounded-full font-bold ${
                index === page ? `bg-amber-600` : null
              }`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
