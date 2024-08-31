import React, { useState } from "react";
import BottomBar from "../../components/BottomBar";
import { Bell } from "lucide-react";

const notifications = [
  { id: 1, name: "Riya Mishra", time: "2020-09-19 at 5:33pm", type: "Profile" },
  { id: 2, name: "Arya Singh", time: "2020-09-19 at 12:17pm", type: "Alert" },
];

const DetailedView = ({ user, onClose }) => (
  <div className="h-screen flex  justify-center pb-10">
    <div className="bg-white p-4 rounded-lg pt-7">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p>Time of latest update: {user.time.split(" at ")[1]}</p>
      <p>Gender: Female</p>
      <div className="mt-4 bg-gray-200 h-40 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Map placeholder</p>
      </div>
      <p className="text-center text-red-600 font-semibold mt-8">
        She is in RED ALERT. Please report to the location asap 
      </p>
      <button
        onClick={onClose}
        className="mt-6 bg-blue-500 text-white text-center w-full  px-4 py-2 rounded hover:bg-blue-600"
      >
        Close
      </button>
    </div>
  </div>
);

const userNotifications = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="bg-white px-3 min-h-screen">
      <div className="max-w-md mx-auto bg-white ">
        {selectedUser ? (
          <DetailedView
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        ) : (
          <div>
            <div className="p-4 border-b">
              <h1 className="text-xl font-semibold gap-2 justify-center flex items-center">
                <Bell className="mr-2" /> Notifications
              </h1>
            </div>
            <div className="p-4">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className="bg-gray-100 p-3 rounded-xl h-[170px] mb-3 cursor-pointer hover:bg-gray-200"
                  onClick={() => setSelectedUser(notif)}
                >
                  <div className="flex flex-col pt-3 justify-center gap-3">
                    <div className="flex pt-3 items-center gap-3">
                      <div className="w-[70px] h-[70px] bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-semibold">{notif.name}</p>
                        <p className="text-sm text-gray-600">{notif.time}</p>
                      </div>
                    </div>
                    <div className="text-center">Tap to get more details!!</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <BottomBar />
      </div>
    </div>
  );
};

export default userNotifications;
