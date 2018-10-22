/**
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and raphael.js
*
* Map of Champagne-Ardenne for Mapael
* Equirectangular projection
* 
* @author CCM Benchmark Group
* @source http://fr.m.wikipedia.org/wiki/Fichier:France_location_map-Departements.svg
*/
(function($) {
	$.extend(true, $.fn.mapael, 
		{
			maps :  {
				france_region_21 : {
					width : 114.48173,
					height : 171.45135,
					getCoords : function (lat, lon) {
						var xfactor = 45.48385;
						var xoffset = -154.4839;
						var x = (lon * xfactor) + xoffset;
						
						var yfactor = -65.97284;
						var yoffset = 3310.3254;
						var y = (lat * yfactor) + yoffset;
						return {x : x, y : y};
					},
					elems : {
					    "department-10" : "m 41.16,96.59 c -0.66,0.15 -1.32,0.25 -1.96,0.01 -0.44,0.08 -0.59,0.74 -1.15,0.47 -1.35,-0.26 -3.18,-0.44 -3.91,1.02 -0.91,0.34 -1.86,-1.12 -2.73,-0.48 -0.57,0.46 -0.14,1.29 -0.81,1.69 -0.75,1.26 -2.77,-0.12 -3.35,1.37 -0.26,0.53 -0.05,1.45 -0.8,1.54 -0.57,0.43 -0.4,1.73 -1.35,1.44 -0.78,-0.24 -1.45,0.26 -1.54,1.06 -0.19,0.35 -0.31,1.1 -0.9,0.7 -0.33,-0.1 -1.44,-0.36 -1.11,0.32 0.2,1.19 0.51,3.02 -0.96,3.53 -0.84,0.69 -1.55,-0.62 -2.5,-0.57 -1.19,-0.07 -2.29,-0.79 -3.53,-0.45 -0.52,0.08 -0.91,-0.43 -1.44,-0.11 -0.78,0.13 -2.01,0.11 -2.01,-0.97 -0.19,-0.49 0.1,-1.8 -0.75,-1.7 -0.47,0.53 -0.83,-0.07 -1.02,-0.45 -0.53,-0.09 -0.63,-0.49 -0.66,-0.96 -0.22,-0.42 -0.84,-0.43 -0.9,-1 -0.63,-0.36 -1.46,0.22 -2.06,0.48 -0.41,0.33 0.3,1.13 -0.44,1.05 -0.6,0.35 -1.34,0.78 -1.61,1.42 0.17,0.48 0.86,1.29 0.53,1.78 -0.79,0.21 -1.37,1.27 -2.3,0.72 -0.36,-0.24 -1.22,-0.07 -0.78,0.46 0.44,0.58 1.03,1.4 0.87,2.14 -0.61,0.36 -1.67,0.28 -1.98,0.97 0.26,0.4 0.44,0.83 0.58,1.27 0.47,0.47 0.08,1.25 -0.2,1.7 0.18,0.79 1.61,0.96 1.01,1.93 -0.2,0.79 -0.41,2.1 0.47,2.53 0.56,-0.19 0.93,-0.91 1.65,-0.64 1.24,-0.09 2.14,0.77 2.83,1.67 0.53,0.43 0.69,1.09 1.02,1.62 0.44,0.09 0.72,0.35 0.85,0.79 0.38,0.5 1.14,0.85 0.79,1.59 0.2,0.79 1.43,0.64 1.65,1.5 0.57,0.82 -1.03,1.47 -0.54,2.18 0.52,0.08 0.72,0.68 0.25,1.02 -0.38,0.72 -1.54,1.22 -1.38,2.1 0.71,0.72 1.67,-1.01 2.32,-0.06 0.69,0.81 1.1,1.78 1.43,2.74 0.47,0.41 1.05,-0.11 1.17,-0.53 0.3,0.07 0.59,0.57 0.9,0.13 0.46,-0.41 0.01,-1.19 0.28,-1.54 0.8,-0.02 1.93,0.88 1.5,1.72 -0.57,0.32 -0.42,1.54 0.36,1.14 0.72,-0.49 1.12,0.68 1.58,1.04 0.61,0.5 0.42,1.19 0.54,1.84 0.53,0.9 1.1,1.79 1.14,2.87 0.47,0.88 1.87,1.3 1.91,2.43 -0.12,0.51 -1.36,0.03 -1.14,0.84 0.16,0.52 1.21,1.39 1.5,0.55 -0.08,-0.44 0.19,-1.29 0.73,-0.8 0.77,0.66 1.01,1.78 0.53,2.69 -0.01,0.56 -0.59,1.53 0.04,1.87 1.09,-0.36 2.29,-0.39 3.39,-0.21 0.5,-0.09 1.1,-1.09 1.4,-0.23 0.45,0.41 1.14,0.33 1.69,0.4 0.43,-0.31 0.23,-1.31 1.03,-1.02 0.52,-0.01 1.1,0.09 1.03,0.74 0.45,0.89 1.51,-0.03 1.96,-0.47 0.62,-0.36 1.03,-1.76 1.81,-1.01 0.52,0.15 0.24,1.2 0.94,0.86 0.58,-0.4 0.16,-1.11 -0.21,-1.47 0.29,-0.47 1.07,-0.27 1.53,-0.32 -0.19,1.05 0.17,2.14 1.16,2.64 0.85,0.73 2.39,0.26 2.22,-0.99 0.1,-0.56 0.53,-1.42 1.23,-0.97 1.36,0.17 2.74,-0.14 4.01,-0.49 0.81,0.33 1.68,0.86 2.55,0.32 1.23,-0.48 2.69,-0.17 3.9,-0.62 0.15,-0.83 -1.1,-1.43 -0.96,-2.24 1.22,-0.21 1.81,-1.85 3.22,-1.62 0.62,-0.25 0.79,0.5 1.39,0.42 0.93,-0.09 1.8,0.9 2.66,0.16 0.57,-0.25 0.82,-0.88 1.06,-1.4 -0.28,-0.6 -0.81,-1.07 -1.13,-1.66 -0.39,-0.43 -1.37,-0.26 -1.51,-0.86 0.7,-0.33 1.77,-0.18 2.1,-1.07 0.59,-0.65 1.23,-1.8 2.28,-1.28 1.11,0.1 2.19,0.96 3.3,0.66 0.55,-0.55 -0.25,-1.57 0.58,-2.01 0.47,-0.51 -0.38,-1 -0.1,-1.59 0.04,-1.07 1.05,-1.92 1.03,-2.95 -0.2,-0.49 -1.15,-0.63 -1.15,-1.13 0.44,-0.19 0.68,-0.64 0.39,-1.06 -0.19,-0.71 0.3,-1.29 0.51,-1.89 -0.21,-0.57 -0.67,-1.08 -0.47,-1.73 -0.19,-0.53 -1.04,-0.46 -0.96,-1.15 -0.21,-0.4 -0.64,-0.85 -0.07,-1.16 0.47,-0.24 0.78,-1.17 -0.03,-1.06 -0.67,-0.26 -1.22,-0.77 -1.98,-0.82 -0.63,-0.21 -1.36,-0.61 -0.97,-1.39 0.16,-1.15 -1.43,-1.02 -2.17,-0.91 -0.75,-0.13 -0.05,-1.44 -0.96,-1.53 -0.67,-0.08 -0.1,-0.87 -0.51,-1.25 -0.38,-1.1 -2.12,-1.05 -2.21,-2.25 0.18,-0.3 0.89,0.04 0.97,-0.53 0.21,-0.96 0.2,-2.02 0.96,-2.74 0.3,-1.07 -1.38,-1.23 -1.7,-2 -0.44,-0.6 -1.51,-0.29 -2.14,-0.12 -0.74,0.18 -1.46,0.54 -1.81,1.24 -0.67,0.65 -1.07,-0.48 -1.49,-0.81 -0.48,-0.25 -0.79,0.5 -1.31,0.15 -1.95,-0.48 -3.94,-1.11 -5.26,-2.7 -0.71,-0.9 -2.04,-1.18 -2.53,-2.24 0.21,-0.58 0.69,-1.2 0.27,-1.84 -0.33,-0.88 0.6,-1.79 0.08,-2.62 0.07,-0.84 -0.25,-1.98 -1.32,-1.84 -0.1,0 -0.2,-0.01 -0.29,0.01 z",
					    "department-51" : "m 30.47,50.75 c -1.32,0.33 -0.27,2.15 -1.09,2.86 -0.45,0.19 -1.02,0.15 -1.13,-0.39 -0.54,-0.78 -1.53,-0.67 -2.28,-0.96 -0.61,-0.35 -0.98,-1.63 -1.81,-1.28 -0.98,0.74 -2.9,1.12 -2.85,2.67 0.24,0.44 -0.07,1.31 -0.66,0.82 -1.04,-0.84 -2.54,-0.72 -3.62,-0.07 -0.63,-0.11 -0.84,0.51 -1.21,0.81 -1.34,0.35 -2.9,0.57 -3.99,1.49 -0.55,0.66 0.23,1.21 0.49,1.74 -0.14,0.41 0.04,0.78 0.17,1.12 -0.24,0.82 0.2,1.59 0.68,2.18 -0.07,0.63 -0.69,0.89 -0.98,1.33 0.27,0.77 1.38,0.64 2.02,0.84 0.51,0.4 -0.28,1.13 0.41,1.49 0.49,0.56 1.22,0.06 1.76,0.21 0.39,0.65 0.16,1.63 -0.71,1.75 -0.65,0.32 -1.3,0.95 -1.77,0.15 -0.75,-0.43 -1.66,0.2 -2.49,0 -0.46,-0.09 -0.93,0.18 -0.89,0.66 -0.46,0.16 -0.22,0.81 -0.62,1.06 0.14,0.55 0.76,0.95 0.93,1.56 0.12,0.49 0.9,1.35 0.34,1.78 -1.11,0 -2.46,1.08 -1.93,2.26 0.95,0.74 2.33,-0.74 3.27,0.18 0.48,0.53 1.07,1.61 0.15,2.03 -0.57,0.2 -1.3,0.22 -1.52,0.94 -0.41,0.46 -0.16,1.35 -0.64,1.68 -0.55,-0.05 -1.23,0.26 -0.93,0.92 0.35,0.78 -0.99,0.51 -1,1.24 -0.07,0.64 -0.25,1.5 -1.11,1.37 -1.48,-0.15 -1.97,1.51 -2.22,2.63 -0.26,0.38 -1.03,0.41 -0.8,1.06 0.09,0.93 0.49,2.29 -0.3,2.96 -0.22,-0.16 -0.55,-0.48 -0.9,-0.22 -0.68,0.46 -1.57,-0.11 -2.2,0.25 -0.02,0.84 1.57,0.17 1.33,1.16 0.23,0.63 -0.31,1.04 -0.89,0.85 -0.87,-0.02 -0.8,1.21 -0.88,1.77 0.58,0.04 1.71,-0.41 1.69,0.62 0.2,0.7 1.47,0.04 1.33,0.96 -0.12,0.74 -0.03,1.48 0.32,2.12 0.06,1.05 -1.73,1.21 -1.31,2.37 0.26,0.38 0.63,0.72 0.44,1.24 0.07,0.89 1.02,0.21 1.39,-0.07 0.62,-0.17 1.51,-0.15 2.05,0.06 -0.55,0.45 0.08,0.84 0.5,0.99 0.58,0.37 0.88,0.99 1.19,1.53 0.67,-0.07 0.47,0.7 0.84,1.04 0.37,0.64 1.06,0.86 1.74,0.79 0.74,0.69 -0.19,2.35 1.11,2.64 1.79,0.27 3.67,-0.19 5.39,0.48 0.98,-0.03 1.85,0.39 2.61,0.97 0.88,-0.16 1.79,-0.91 1.59,-1.91 0.08,-0.7 -0.1,-1.43 -0.24,-2.06 0.67,-0.45 2.12,0.37 2.2,-0.87 0.07,-0.82 0.81,-1.32 1.59,-1.06 1.01,-0.08 1.01,-1.46 1.74,-1.97 0.32,-0.66 0.51,-1.82 1.43,-1.83 0.96,0.24 2.15,0.18 2.63,-0.83 0.13,-0.49 0.04,-1.03 0.55,-1.39 0.67,-0.8 1.77,0.71 2.65,0.55 0.71,-0.9 1.49,-1.64 2.72,-1.22 0.72,-0.02 1.99,0.43 2.21,-0.57 0.57,0.22 1.2,0.66 1.86,0.28 1.05,-0.51 2.33,0.5 2.1,1.63 0.07,0.5 0.45,0.9 0.08,1.36 -0.31,0.83 -0.02,1.71 0.06,2.51 -0.54,0.41 -0.59,1.26 0.09,1.56 1.8,0.89 2.76,3.04 4.87,3.43 1.11,0.35 2.3,0.93 3.45,0.48 0.76,-0.1 0.39,1.3 1.23,0.98 0.7,-0.49 1.23,-1.35 2.19,-1.31 0.63,-0.4 1.67,-0.32 2.31,-0.18 -0.05,1.15 1.54,1.23 2.34,1 1.47,-0.38 2.93,0.07 4.36,0.32 0.69,-0.34 -0.28,-1.15 -0.05,-1.72 -0.38,-0.67 -0.98,-1.48 -0.75,-2.28 1.01,-0.2 1.97,-0.53 2.78,-1.18 0.6,-0.12 1.12,-0.53 0.94,-1.22 0.09,-1.34 -1.51,-1.53 -2.5,-1.46 -0.31,-0.07 -1.42,0.15 -0.97,-0.49 0.17,-0.56 0.59,-0.75 1.04,-1 0.39,-0.54 1.08,-0.41 1.51,-0.05 0.68,-0.09 1.17,0.77 1.86,0.24 0.7,-0.22 1.27,-0.81 1.89,-1.09 0.57,0.33 1.29,0.73 1.85,0.15 0.78,-0.23 2.43,-0.01 2.28,-1.29 -0.15,-0.38 0.71,-0.48 0.21,-0.93 -0.15,-0.47 0.37,-1.46 -0.5,-1.4 -1.21,-0.74 -2.09,-1.91 -2.85,-3.07 -0.64,-0.37 -1.94,-0.24 -1.94,-1.26 -0.27,-1.34 1.3,-1.71 1.95,-2.53 -0.1,-0.51 -0.58,-1 -0.79,-1.53 -0.45,-0.53 0.53,-1.07 0.15,-1.69 -0.44,-0.39 -0.09,-0.96 0.36,-1.11 0.28,-0.74 0.8,-1.48 1.71,-1.39 1.43,-0.07 3.38,-1.18 3.06,-2.83 -0.29,-0.54 -1.34,-0.31 -1.54,-0.75 0.29,-0.56 0.93,-0.6 1.41,-0.82 0.18,-0.5 0.23,-1.11 0.19,-1.62 -0.41,-0.81 -1.44,-0.85 -2.1,-0.3 -0.21,0.06 -0.8,0.45 -0.9,0.28 0.55,-1.1 2.08,-1.97 1.52,-3.39 -0.15,-1.35 -0.34,-2.74 -1.14,-3.88 -0.43,-1.21 -1.04,-2.35 -1.53,-3.52 0.13,-0.99 2,-0.68 1.97,-1.75 -0.29,-0.44 -0.63,-0.85 -0.71,-1.39 -0.37,-0.32 -1.01,-0.15 -1.29,-0.66 -0.32,-0.3 -0.97,-0.33 -0.7,-0.9 -0.29,-0.79 -1.41,-0.22 -1.91,0.09 -0.64,0.37 -0.92,1.19 -0.77,1.83 -1.02,0.04 -1.86,-0.56 -2.56,-1.21 -1.04,0.14 -2.15,0.45 -3.21,0.05 -0.64,-0.51 -1.49,-0.16 -2.17,-0.6 -0.79,0.12 -1.15,1.14 -2.01,1.25 -0.73,0.38 -1.56,-0.11 -1.66,-0.91 -0.12,-0.65 -0.48,-1.23 -0.93,-1.66 -0.09,-0.56 -0.14,-1.42 -0.94,-1.3 -1.13,0.02 -1.98,1 -3.16,0.89 -1.25,0.05 -2.56,0.74 -3.71,-0.09 -1.17,-0.38 -1.72,-1.49 -2.31,-2.45 -0.47,-0.28 -1,0.53 -1.4,-0.1 -0.61,-0.57 -1.75,-0.05 -2.02,-1.04 -0.46,-1.09 -1.7,-1.41 -2.19,-2.46 -0.56,-0.68 -1.49,-0.83 -2.29,-0.75 -0.31,-0.73 -1,-1.14 -1.8,-1.09 -1.59,-0.15 -3.2,0.18 -4.77,-0.16 l -0.06,0.01 z",
					    "department-08" : "M 65.48,0.09 C 64.75,1.22 63.6,1.89 62.62,2.74 c -0.35,0.92 -1.12,1.53 -1.99,1.91 -1.08,0.61 -1.34,1.89 -1.06,3.03 0.04,1.32 -0.21,2.79 -1,3.86 -1.43,0.82 -3.34,0.55 -4.68,1.63 -1.43,0.43 -2.34,1.94 -3.93,1.98 -1.01,0.24 -2.04,0.2 -2.98,-0.24 -1.43,-0.31 -2.96,-0.37 -4.17,-1.26 -1.28,-0.22 -2.72,-0.18 -3.92,0.28 -0.44,0.84 -1.02,1.84 -0.84,2.83 0.29,0.56 1.07,0.84 1.56,0.84 -0.05,1.11 0.05,2.39 -0.5,3.37 -0.52,0.45 -0.58,1.19 -0.93,1.76 -0.35,0.79 0.16,1.69 -0.01,2.43 -0.32,0.28 -0.92,1.06 -0.07,1.03 0.63,0.15 1.51,0.89 0.83,1.53 -0.65,0.49 -0.26,1.63 -1.2,1.8 -0.92,0.22 -0.96,1.28 -1.6,1.77 -0.65,0.22 -1.4,0.48 -1.56,1.23 -0.32,0.24 -0.9,0.26 -0.8,0.85 -0.09,0.78 -0.08,1.99 -0.94,2.31 -0.99,0.27 -2.32,-0.86 -3.07,0.16 -0.6,0.69 -0.09,1.51 0.6,1.87 0.92,0.17 0.1,1.42 0.89,1.79 0.43,0.49 -0.58,0.98 -0.74,1.42 -0.34,0.68 0.8,0.25 0.81,0.85 0.03,0.42 0.29,1.41 -0.38,1.36 -0.33,0.29 -0.52,0.7 -0.99,0.83 -0.32,1.06 0.04,2.34 0.62,3.28 0.26,0.27 0.46,0.78 -0.11,0.76 -0.88,-0.03 -0.67,0.96 -0.44,1.49 0.06,1.3 1.51,1.3 2.46,1.27 1.35,0.04 2.86,-0.29 4.12,0.24 0.24,0.48 0.58,0.91 1.15,0.8 0.86,0.11 1.82,0.39 2.05,1.34 0.29,0.66 1.13,0.61 1.55,1.03 0.09,0.75 0.57,1.64 1.45,1.53 0.63,0.15 1.2,0.92 1.85,0.34 0.84,-0.05 0.76,1.28 1.39,1.64 0.9,1.01 2.33,1.68 3.67,1.21 1.25,-0.12 2.56,-0.22 3.62,-0.93 0.58,-0.16 1.6,-0.22 1.92,0.37 -0.18,0.49 -0,0.96 0.41,1.25 0.59,0.64 0.44,2.13 1.49,2.23 0.94,0.02 1.6,-0.73 2.14,-1.37 0.64,-0.3 1.1,0.46 1.75,0.2 0.75,0.33 1.54,0.72 2.42,0.6 0.59,0.08 1.23,-0.29 1.75,-0.29 0.2,0.39 0.77,0.27 0.88,0.76 0.35,0.43 1.43,0.74 1.35,-0.12 0.23,-0.51 0.65,-1.06 0.75,-1.54 0.75,0.31 1.74,-0.56 2.35,0.17 -0.28,0.99 1.24,1.59 1.76,0.72 0.99,-0.48 1.58,-1.54 2.75,-1.63 0.57,0.1 1.02,-0.23 0.97,-0.84 0.3,-0.66 -0.59,-0.54 -0.72,-1.06 -0.33,-0.56 0.1,-1.26 -0.31,-1.86 -0.19,-0.98 1.3,-1.36 1.13,-2.38 0.43,-0.77 1.92,-0.04 2.13,-1.13 0.27,-0.66 -0.89,-0.95 -0.61,-1.51 0.45,-0.41 1.41,-0.79 0.86,-1.56 -0.47,-0.6 0.13,-1.25 0.03,-1.85 -0.6,-0.17 -1.19,-0.75 -1.1,-1.42 -0.19,-0.62 -1.31,-1.24 -0.81,-1.94 0.79,-0.09 1.51,-1.19 1.2,-1.92 -0.13,-0.59 0.13,-1.41 0.79,-1.48 0.37,-0.67 -0.42,-1.86 0.59,-2.18 0.96,-0.16 1.5,0.65 1.88,1.4 0.77,0.6 1.76,-0.12 2.57,-0.07 0.87,0.35 1.58,1.06 2.03,1.81 0.73,0.2 1.1,-0.75 1.78,-0.86 0.83,-0.56 1.01,-1.85 1.88,-2.3 0.73,0.24 1.91,0.01 1.81,-0.97 0.37,-0.25 0.4,-0.81 -0.11,-0.99 -0.54,-0.43 -1.34,-0.55 -1.74,0.1 -0.54,0.69 -1.72,0.21 -1.58,-0.67 0.09,-0.81 1.66,-1.47 0.62,-2.14 -0.84,-0.69 -1.51,-1.71 -2.44,-2.22 -0.79,0.32 -1.66,1.21 -2.52,0.53 -0.65,-0.39 -2.12,0.02 -2.05,-1.08 0.04,-1.05 -1.27,0.01 -1.58,-0.76 -0.57,-1.04 -0.45,-2.77 -1.76,-3.21 -0.69,-0.09 -1.52,0.19 -2.04,-0.36 -1.18,0.04 -1.7,-1.17 -2.53,-1.75 -1.01,-0.34 -1.96,0.16 -2.84,0.58 -1.09,-0.05 -2.29,-0.09 -3.31,-0.43 0.1,-0.88 0.78,-1.78 0.27,-2.7 -0.21,-0.74 -0.95,-1.43 -0.31,-2.2 0.48,-1.09 1.53,-2.52 0.48,-3.62 -0.58,-0.56 -0.76,-1.62 -1.74,-1.55 -1.2,0.01 -2.03,-1.57 -1.06,-2.42 1.18,-0.92 0.64,-2.65 1.5,-3.76 0.15,-0.67 -0.64,-1.46 0.11,-1.96 0.54,-0.43 0.11,-1.76 1,-1.72 0.94,0.21 0.48,-1.1 0.71,-1.61 0.21,-0.57 0.86,-1.15 0.18,-1.71 -0.6,-0.89 -2.18,0.52 -2.36,-0.71 -0.18,-0.22 -0.16,-0.9 -0.57,-0.76 z",
					    "department-52" : "m 72.24,98.22 c -0.61,-0.13 -0.96,0.5 -1.41,0.66 -0.53,-0.32 -1.23,-1.05 -1.77,-0.28 -0.62,0.38 -1.48,1.06 -2.22,0.75 -0.44,-0.41 -1.16,-0.1 -1.56,-0.58 -0.54,-0.25 -0.78,0.33 -1.14,0.5 -0.52,-0.01 -1.11,1.13 -0.28,1.03 1.09,-0.22 2.91,-0.1 3.05,1.3 0.05,0.61 0.55,1.75 -0.47,1.47 -0.99,0.04 -1.51,1.21 -2.56,1.1 -1.07,0.09 -0.75,1.91 0.23,1.84 0.32,0.38 -0.31,0.87 0.01,1.32 -0.03,0.31 0.56,0.96 0.21,1.16 -1.66,-0.17 -3.32,-1.01 -5,-0.37 -0.75,0.03 -0.46,0.72 -0.4,1.18 -0.13,0.52 -0.85,0.66 -0.8,1.29 -0.17,0.79 0.05,1.89 -0.94,2.16 -0.42,0.73 0.9,0.89 1.31,1.19 0.6,0.26 0.51,1.05 0.89,1.48 0.17,0.73 0.94,1.21 1.11,1.9 0.72,0.31 1.75,0.01 2.3,0.65 -0.1,0.68 -0.31,1.7 0.7,1.78 0.99,0.09 1.61,0.92 2.58,1.03 0.76,0.24 -0.24,0.91 -0.41,1.26 -0.3,0.9 0.67,1.6 1.29,2.01 -0.57,0.65 0.03,1.34 0.37,1.91 -0.52,0.63 -0.88,1.54 -0.37,2.32 -0.04,0.32 -0.82,0.58 -0.31,0.96 0.49,0.25 1.17,0.59 0.77,1.26 -0.33,1.08 -1.66,2.25 -0.73,3.4 0.22,0.6 -0.58,1.07 -0.49,1.7 -0,0.54 0.13,1.31 -0.69,1.09 -1.41,0.08 -2.81,-1.22 -4.16,-0.48 -0.86,0.41 -0.86,1.53 -1.81,1.79 -0.48,0.12 -0.47,0.63 -0.02,0.74 0.52,0.55 0.88,1.33 1.47,1.78 0.11,0.58 -0.7,0.9 -0.47,1.54 0.3,1.42 2.19,1.07 3.25,1 0.69,-0.13 0.63,0.87 1.13,1.14 -0.21,0.47 -1.23,1.22 -0.54,1.72 1.08,0.15 2.55,-0.15 3.06,1.13 0.38,0.69 -0.54,1.37 -0.93,1.85 -0.86,0.4 0.07,1.23 0.6,1.38 0.42,-0.69 1.11,-1.98 2.15,-1.47 0.54,0.51 0.54,1.39 1.04,1.93 0.22,0.61 0.14,1.59 1.06,1.55 1.03,0.41 0.4,1.86 1.31,2.43 0.64,0.35 1.08,1.21 0.46,1.75 -0.74,0.99 -2.19,1.12 -2.84,2.14 -0.24,0.68 0.69,0.93 1.02,0.41 0.85,0.16 0.85,1.35 0.88,2.02 0.55,0.61 -0.16,1.47 -0.45,2.05 0.18,0.85 1.3,1.4 1.98,0.68 0.28,-0.51 0.94,-0.93 1.49,-0.93 0.08,0.56 0.48,0.92 1.06,0.94 -0.03,0.59 -0.45,1.44 0.4,1.68 1,0.33 1.97,1.32 3.08,1.12 0.95,-0.41 0.96,-2.04 2.14,-1.97 0.3,0.75 -0.62,2.06 0.68,2.19 1.04,0.28 1.45,1.45 2.39,1.81 0.35,-0.12 0.79,-0.01 0.42,0.42 -0.55,0.71 -0.57,1.9 0.24,2.4 1.23,-0.45 1.79,-2.39 3.37,-2.07 0.54,0.03 0.63,0.55 0.76,0.93 0.74,0.11 1.11,-0.95 1.17,-1.56 0.17,-0.69 0.69,-1.27 1.19,-1.68 -0.28,-0.94 0.29,-2.69 1.5,-1.85 0.82,0.17 1.66,-0.24 2.21,-0.83 0.79,0.3 1.95,1.31 2.58,0.21 0.55,-0.45 0.91,-1.43 1.6,-1.6 0.75,0.3 0.57,1.16 0.89,1.72 0.83,0.55 2.04,0.3 2.92,-0.03 0.57,-0.39 2.05,-0.12 1.66,-1.27 -0.68,-0.92 -0.23,-2.17 0.48,-2.93 0.35,-0.68 0.16,-1.73 -0.79,-1.68 -0.78,-0.49 -0.18,-1.67 -0.14,-2.37 0.02,-0.68 0.55,-1.25 1.27,-1.05 0.95,0.21 1.88,0.15 1.53,-1.07 -0.09,-0.87 0.77,-1.76 1.67,-1.34 0.63,0 1.57,1.09 1.95,0.1 0,-0.62 -0.06,-1.28 0.45,-1.76 0.42,-0.47 0.47,-1.82 1.38,-1.42 0.43,0.2 1.37,0.36 1.12,-0.43 0.01,-1.43 -1.33,-2.2 -1.86,-3.39 -0.49,-0.12 -0.79,0.55 -1.32,0.49 -0.29,0.23 -0.54,0.73 -0.97,0.37 -0.77,-0.6 -1.13,-1.9 -0.32,-2.63 0.26,-0.74 -0.4,-1.47 -0.68,-2.13 -0.57,-0.82 -1.4,-1.57 -2.41,-1.65 -0.33,-0.3 -0.24,-0.92 -0.73,-1.17 -0.53,-0.46 -1.4,-1.34 -2.13,-0.91 0.04,0.75 -0.85,-0.01 -1.05,-0.22 -0.48,-0.48 0.24,-1.33 0.68,-1.62 0.5,0.09 0.81,-0.38 0.39,-0.75 -0.47,-0.6 0.64,-1.06 0.71,-1.65 0.44,-0.73 0.45,-1.61 0.24,-2.37 0.39,-0.85 1.44,-0.91 2.22,-0.95 -0.31,-0.98 -1,-2.24 -2.09,-2.56 -0.67,0.01 -1.55,-0.33 -1.93,-0.85 0.21,-0.63 0.73,-1.46 -0.03,-1.97 -0.59,-0.49 -1.39,-1.57 -1.97,-0.45 -0.66,0.92 -1.18,-0.93 -1.76,-1.35 -0.67,-0.95 -1.54,-1.89 -1.8,-2.99 -1.06,-0.58 -2.66,-0.63 -3.37,0.51 -0.34,0.35 -1.13,0.75 -1.22,-0.01 -0.24,-0.92 0.12,-1.87 0.61,-2.61 -0.44,-0.38 -1.61,-0.27 -1.75,-0.94 0.97,-0.33 1.98,-1.03 2.52,-1.91 -0.34,-0.28 -0.45,-0.97 -1.06,-0.94 -0.77,-0.46 -1.3,-1.29 -1.16,-2.2 -0.29,-0.56 -1.07,0.05 -1.49,-0.39 -1.01,-0.36 -1.36,-1.48 -2.08,-2.16 -0.76,-0.31 -1.65,0.09 -2.35,-0.53 -0.87,-0.41 -1.75,-0.85 -2.71,-0.87 -0.21,-0.28 -0.39,-0.7 -0.77,-0.73 -0.38,-0.85 -1.35,-1.59 -2.31,-1.49 -0.7,-0.5 -0.98,-1.45 -1.57,-1.99 -0.79,-0.17 -2.05,0.12 -2.22,-0.97 -0.15,-0.7 -0.37,-2.12 -1.09,-0.89 -0.43,0.63 -1.74,0.89 -2.01,0.02 0.47,-0.85 -0.07,-1.74 -0.2,-2.57 0.59,-0.28 1.02,-1.28 0.21,-1.6 -0.41,-0.16 -0.86,-0.23 -1.29,-0.21 z"
					}
				}
			}
		}
	);
})(jQuery);