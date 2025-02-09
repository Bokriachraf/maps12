import {Array2d}  from './array.js';

// export function pClosest(k,pt)
// {
// 	let n = Closest.length;
// 	let distance = new Array(n);
// 	let close = [];

// 	for(let i = 0; i < n; i++)
// 	{
// 		let x = Closest[i][0]-pt[0][0], y = Closest[i][1]-pt[0][1];
// 		distance[i] = (x * x) + (y * y);
// 	}

// 	distance.sort(function(a,b){return a-b;});
	
// 	// Find the k-th distance
// 	let distk = distance[k - 1];

// 	// Print all distances which are
// 	// smaller than k-th distance
// 	for(let i = 0; i < n; i++)
// 	{
// 		let x = Closest[i][0]-pt[0][0], y = Closest[i][1]-pt[0][1];
// 		let dist = (x * x) + (y * y);
		
// 		if (dist <= distk)
// 		close.push([Closest[i][0],Closest[i][1]])
//     // console.log("[" + pts[i][0] + ", " + pts[i][1] + "]<br>");
// 	}
//     // console.log(close)
// 	return (close)
    
// }

export function pClosest(pts,k,pt)
{
	let n = pts.length;
	let distance = new Array(n);
	let close = [];

	for(let i = 0; i < n; i++)
	{
		let x = pts[i][0]-pt[0][0], y = pts[i][1]-pt[0][1];
		distance[i] = (x * x) + (y * y);
	}

	distance.sort(function(a,b){return a-b;});
	
	// Find the k-th distance
	let distk = distance[k - 1];

	// Print all distances which are
	// smaller than k-th distance
	for(let i = 0; i < n; i++)
	{
		let x = pts[i][0]-pt[0][0], y = pts[i][1]-pt[0][1];
		let dist = (x * x) + (y * y);
		
		if (dist <= distk)
		close.push([pts[i][0],pts[i][1]])
    // console.log("[" + pts[i][0] + ", " + pts[i][1] + "]<br>");
	}
    // console.log(close)
	return (close)
    
}

// // Driver code
let point = [[6, -2]];
let points = [[3, 3], [5, -1], [-2, 4]];
let K = 2;

// console.log(pClosest(Array2d,K,point))	
// // pClosest(points, K,point);
