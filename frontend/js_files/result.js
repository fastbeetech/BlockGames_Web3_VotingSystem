//initialize Moralis on RRRinkeby
const serverUrl = "https://mrhyy1if02wl.usemoralis.com:2053/server";
const appId = "AuH19PpSEOGZ1g2U08nV6tnNvgTkDMzaS8VqvjyI";
Moralis.start({ serverUrl, appId });
//

const ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "BODList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "candidatesList",
    outputs: [
      { internalType: "uint256", name: "candidateID", type: "uint256" },
      { internalType: "string", name: "candidateName", type: "string" },
      { internalType: "address", name: "registeredAddress", type: "address" },
      { internalType: "uint8", name: "totalVotesReceived", type: "uint8" },
      { internalType: "uint8", name: "votesReceivedBOD", type: "uint8" },
      { internalType: "uint8", name: "votesReceivedTeachers", type: "uint8" },
      { internalType: "uint8", name: "votesReceivedStudents", type: "uint8" },
      { internalType: "bool", name: "receivedChairmansVote", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chairman",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_candidateName", type: "string" },
    ],
    name: "createCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "_addressArray", type: "address[]" },
      { internalType: "uint256", name: "_role", type: "uint256" },
    ],
    name: "createMultipleStakeHolders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_address", type: "address" },
      { internalType: "uint256", name: "_role", type: "uint256" },
    ],
    name: "createStakeHolder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getListOfBOD",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListOfCandidates",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "candidateID", type: "uint256" },
          { internalType: "string", name: "candidateName", type: "string" },
          {
            internalType: "address",
            name: "registeredAddress",
            type: "address",
          },
          { internalType: "uint8", name: "totalVotesReceived", type: "uint8" },
          { internalType: "uint8", name: "votesReceivedBOD", type: "uint8" },
          {
            internalType: "uint8",
            name: "votesReceivedTeachers",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "votesReceivedStudents",
            type: "uint8",
          },
          { internalType: "bool", name: "receivedChairmansVote", type: "bool" },
        ],
        internalType: "struct SimpleVoting.Candidate[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListOfStakeHolders",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListOfStudents",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListOfTeachers",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "isAStakeholder",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "resultsActive",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "stakeholders",
    outputs: [
      { internalType: "enum SimpleVoting.Role", name: "role", type: "uint8" },
      { internalType: "bool", name: "hasVoted", type: "bool" },
      { internalType: "uint256", name: "candidateChosen", type: "uint256" },
      { internalType: "address", name: "registeredAddress", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "stakeholdersList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "studentList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "teachersList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_name", type: "string" }],
    name: "toBytes",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleResult",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleVoting",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_candidateID", type: "uint256" },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "votingActive",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];
const CHAIN = "rinkeby";
// const CONTRACTADDRESS = "0xd39f7640739b1AF36d223709C5442e4944595ea1";
const CONTRACTADDRESS = "0x251e18258E3FcDF32767AFe05b5398D0e51fA6E9";

async function login() {
  let user = Moralis.User.current();
  if (!user) {
    await Moralis.enableWeb3();
    user = await Moralis.authenticate({
      signingMessage: "Log in using Moralis",
    })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

//TOGGLE THE STATUS BAR FOR VOTING STATUS
//TOGGLE THE STATUS BAR FOR VOTING STATUS
//TOGGLE THE STATUS BAR FOR VOTING STATUS

if (getStateData("votingStatus")) {
  document.getElementById("voting-status").style.backgroundColor = "green";
  document.getElementById("votingStatusText").innerHTML = "Voting Active";
}

if (!getStateData("votingStatus")) {
  document.getElementById("voting-status").style.backgroundColor = "red";
  document.getElementById("votingStatusText").innerHTML = "Voting Inactive";
}

//TOGGLE THE STATUS BAR FOR RESULTS STATUS
//TOGGLE THE STATUS BAR FOR RESULTS STATUS
//TOGGLE THE STATUS BAR FOR RESULTS STATUS

if (getStateData("resultStatus")) {
  document.getElementById("result-status").style.backgroundColor = "green";
  document.getElementById("resultStatusText").innerHTML = "Result Active";
}

if (!getStateData("resultStatus")) {
  document.getElementById("result-status").style.backgroundColor = "red";
  document.getElementById("resultStatusText").innerHTML = "Result Inactive";
}

//STATE MANAGEMENT FUNCTIONS
//STATE MANAGEMENT FUNCTIONS
//STATE MANAGEMENT FUNCTIONS

// implementation for keeping state
function setState(key, params) {
  localStorage.setItem(key, JSON.stringify(params)); //setState
  console.log("setState", key, params); //setState
}

function getStateData(params) {
  let getData = localStorage.getItem(params);
  return JSON.parse(getData);
}

//DISPLAY MODAL CLOSING MODAL ON SCREEN
//DISPLAY MODAL CLOSING MODAL ON SCREEN
//DISPLAY MODAL CLOSING MODAL ON SCREEN

document.getElementById("close").onclick = function () {
  document.getElementById("modal").classList.replace("grid", "hidden");
};
document.getElementById("closeBtn").onclick = function () {
  document.getElementById("modal").classList.replace("grid", "hidden");
};

//DISPLAY ADDRES STATE EVEN ON RELOAD
//DISPLAY ADDRES STATE EVEN ON RELOAD
//DISPLAY ADDRES STATE EVEN ON RELOAD
//@abiola
if (getStateData("account")) {
  document.getElementById("wallet-address").innerHTML = getStateData("account");
}

//DISPLAY AND UPDATE STATUS BAR
//DISPLAY AND UPDATE STATUS BAR
//DISPLAY AND UPDATE STATUS BAR

updateStatusBar();

async function updateStatusBar() {
  const candidatesArray = await getListOfCandidates();
  const BODArray = await getListOfBOD();
  const teachersArray = await getListOfTeachers();
  const studentsArray = await getListOfStudents();

  // console.log(candidatesArray.length);
  document.getElementById(
    "candidateCount"
  ).innerHTML = `Candidate: ${candidatesArray.length}`;
  document.getElementById(
    "BODCount"
  ).innerHTML = `Board of directors: ${BODArray.length}`;
  document.getElementById(
    "studentCount"
  ).innerHTML = `Students: ${studentsArray.length}`;
  document.getElementById(
    "teacherCount"
  ).innerHTML = `Teachers: ${teachersArray.length}`;
}

async function getListOfCandidates() {
  const options = {
    chain: CHAIN, //update
    address: CONTRACTADDRESS, //update
    function_name: "getListOfCandidates", //check
    abi: ABI,
  };
  return await Moralis.Web3API.native.runContractFunction(options);
}

async function getListOfBOD() {
  const options = {
    chain: CHAIN, //update
    address: CONTRACTADDRESS, //update
    function_name: "getListOfBOD", //check
    abi: ABI,
  };
  return await Moralis.Web3API.native.runContractFunction(options);
}

async function getListOfTeachers() {
  const options = {
    chain: CHAIN, //update
    address: CONTRACTADDRESS, //update
    function_name: "getListOfTeachers", //check
    abi: ABI,
  };
  return await Moralis.Web3API.native.runContractFunction(options);
}

async function getListOfStudents() {
  const options = {
    chain: CHAIN, //update
    address: CONTRACTADDRESS, //update
    function_name: "getListOfStudents", //check
    abi: ABI,
  };
  return await Moralis.Web3API.native.runContractFunction(options);
}

//DISPLAY THE CANDIDATES ON THE SCREEN
//DISPLAY THE CANDIDATES ON THE SCREEN
//DISPLAY THE CANDIDATES ON THE SCREEN

//NOTE DISPLAY JUST CANDIDATE NAME, CANDIDATE ID AND A FAKE IMAGE
displayCandidatesOnScreen();
async function displayCandidatesOnScreen() {
  const candidatesArray = await getListOfCandidates(); //this stores the candidates list inside the variable
  //you can console.log it to view the array
  console.log(candidatesArray);

  //@abiola start from here
  candidatesArray.length && loopCandidate(candidatesArray);
  candidatesArray.length && loopTable(candidatesArray);
}

function loopCandidate(array) {
  document.getElementById("result list").innerHTML = array
    .map(
      (candidate) =>
        `<div class="cursor-pointer rounded-sm">
      <img src="https://img.freepik.com/free-photo/3d-rendering-male-character-profile-with-cream-hat-orange-polo-shirt-good-character-profile_477250-61.jpg?size=338&ext=jpg&ga=GA1.1.1906834557.1622206067" alt="voters image" class="h-52 w-52">
      <div class="bg-zinc-700 text-center w-52">
      <h1 class="text-lg font-bold">ID: ${candidate[0]}</h1>
      <p class="font-sans font-light">Name: ${candidate[1]}</p>
      </div>
      </div>
      `
    )
    .join("");
}
function loopTable(array) {
  document.getElementById("count-result").innerHTML = array
    .map(
      (candidate) =>
        `
        <tr>
          <th scope="row">${candidate[0]}</th>
          <td>${candidate[1]}</td>
          <td>${candidate[2]}</td>
          <td>${candidate[3]}</td>
          <td>${candidate[4]}</td>
          <td>${candidate[5]}</td>
          <td>${candidate[6]}</td>
          <td>${candidate[7]}</td>
      </tr>
      `
    )
    .join("");
}

// return user to homepage if result is not active
if (getStateData("resultStatus") === false) {
  function secondsCounter() {
    let count = 0;
    let counter = setInterval(() => {
      count++;
      console.log("count: ", count);
      document.getElementById("modal").classList.replace("hidden", "grid");
      document.getElementById(
        "modal-header"
      ).innerHTML = `Result is not active`;
      document.getElementById("modal-header").innerHTML =
        "Result is not active";
      document.getElementById(
        "modal-body"
      ).innerHTML = `You will be redirected back to homepage in ${count} seconds checkback later when result are opened`;

      if (count === 5) {
        document.getElementById(
          "modal-body"
        ).innerHTML = `redirecting to homepage`;

        clearInterval(1);
      }
    }, 1000);
    return counter;
  }
  secondsCounter();

  setTimeout(() => {
    window.location.replace("../index.html");
  }, 5000);
}

console.info("result");
