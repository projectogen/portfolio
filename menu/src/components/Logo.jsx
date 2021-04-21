import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={189.635}
      height={80.4}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="136.683 3.8 226.635 142.4"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter
          id="prefix__editing-neon"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood floodColor="#514cd4" result="flood" />
          <feComposite
            operator="in"
            in="flood"
            in2="SourceAlpha"
            result="color"
          />
          <feFlood floodColor="#514cd4" result="flood2" />
          <feComposite
            operator="in"
            in="flood2"
            in2="SourceAlpha"
            result="color2"
          />
          <feMorphology
            operator="dilate"
            radius={2}
            in="color"
            result="dilate"
          />
          <feGaussianBlur stdDeviation={6} in="color" result="blur1" />
          <feGaussianBlur stdDeviation={2.5} in="color" result="blur2" />
          <feGaussianBlur stdDeviation={1} in="SourceAlpha" result="blur3" />
          <feGaussianBlur stdDeviation={6} in="dilate" result="blur4" />
          <feConvolveMatrix
            in="color2"
            result="conv"
            order="3,3"
            divisor={1}
            kernelMatrix="1 1 1 1 1 1 1 1 1"
          />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="blur4" />
            <feMergeNode in="blur3" />
            <feMergeNode in="blur3" />
            <feMergeNode in="blur3" />
            <feMergeNode in="blur3" />
            <feMergeNode in="conv" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-neon)">
        <path
          d="M201.03 100.62h0q-11.51 0-17.66-6.21h0q-6.16-6.2-6.16-18.98h0q0-12.77 6.44-18.93h0q6.43-6.15 19.29-6.15h7.73q7.66 0 13.81 3.66h0q6.16 3.65 6.16 9.13h0q0 2.05-1.22 2.93h0q-1.21.88-2.35.88h0-4.13 0q-2.98 0-4.75-3.39h0q-1.77-3.4-8.73-3.4h0-6.17 0q-7.6 0-10.3 3.26h0q-2.71 3.26-2.71 11.99h0q0 8.74 2.43 12.09h0q2.43 3.34 8.67 3.34h7.11q5.58 0 7.97-2.13h0q2.39-2.13 2.46-6.12h0-7.83 0q-1.36 0-2.31-.95h0q-.95-.96-.95-2.31h0v-2.7h0q0-1.35.95-2.31h0q.95-.95 2.31-.95h17.4q1.35 0 2.3.95h0q.96.96.96 2.31h0v3.85h0q0 9.7-5.83 14.92h0q-5.82 5.22-17.09 5.22h0-7.8zm40.32-4.65h0q-5.34-5.06-5.34-14.58h0q0-9.51 5.38-14.63h0q5.37-5.11 14.9-5.11h0q9.54 0 14.87 4.98h0q5.34 4.97 5.34 14.26h0v1.98h0q0 .93-.6 1.54h0q-.61.61-1.55.61h0-26.1 0q.35 4.26 2.44 6.2h0q2.1 1.94 6.71 1.94h0q4.61 0 6.31-2.08h0q1.7-2.08 4.2-2.11h5.16q.94 0 1.54.61h0q.61.6.61 1.54h0q0 9.95-18.96 9.91h0q-9.57 0-14.91-5.06zm6.83-18.27h16.12q-.35-8.18-8.02-8.18h0q-7.68 0-8.1 8.18zm34.7 20.53h0V64.49h0q0-.93.61-1.54h0q.61-.61 1.51-.61h7.76q.9 0 1.51.61h0q.61.61.61 1.54h0v2.19h0q5.96-5.03 12.7-5.03h0q6.75 0 10.98 4.11h0q4.23 4.11 4.23 12.57h0v19.9h0q0 .9-.61 1.5h0q-.61.61-1.54.61h0-7.73 0q-.91 0-1.51-.61h0q-.61-.6-.61-1.5h0v-19.9h0q0-8.29-6.62-8.29h0q-4.33 0-9.29 4.96h0v23.23h0q0 .9-.61 1.5h0q-.61.61-1.51.61h0H285h0q-.9 0-1.51-.61h0q-.61-.6-.61-1.5z"
          fill="none"
          stroke="#f2d9ff"
          strokeWidth={1.1}
        />
      </g>
      <style />
    </svg>
  )
}

export default SvgComponent
