isl=[
    {team:"atk",played:17,won:11,draw:3,los:3,pts:36},
    {team:"mumbai",played:17,won:10,draw:4,los:3,pts:34},
    {team:"hyderabad",played:18,won:6,draw:9,los:3,pts:27},
    {team:"goa",played:18,won:6,draw:9,los:3,pts:27},
    {team:"northeast",played:18,won:6,draw:9,los:3,pts:27},
    {team:"benguluru",played:18,won:5,draw:7,los:6,pts:22},
    {team:"jamshed",played:18,won:5,draw:6,los:7,pts:21},
]

isl.map(tem=>tem.team.toUpperCase()).forEach(tem=>console.log(tem)) //convert to upper case
isl.sort((o1,o2)=>o2.played>o1.played?1:-1).forEach(o=>console.log(o.team,o.played))//sort most played

var teams=isl.reduce((t1,t2)=>t1.pts>t2.pts?t1:t2)//hightest point
console.log(teams);

var teams=isl.reduce((t1,t2)=>t1.pts>t2.pts?t2:t1)//low point
console.log(teams);

var teams=isl.reduce((t1,t2)=>t1.pts>t2.pts?t2:t1)//add qualified score34 and<32 disqualify

isl.filter(t1=>t1.pts>=32?t1["status"]="qualified":t1["status"]="not qualified").forEach(o=>console.log(o))


