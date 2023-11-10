import styled from "styled-components";

export const MainLayout = styled.div`
padding: 2rem;
height: 100%;
display: flex;
gap: 2rem;

@media (max-width: 768px) {
    /* Adjust styles for screens with a maximum width of 768px */
    flex-direction: column; /* Stack elements vertically on small screens */
    padding: 1rem; /* Reduce padding for small screens, adjust as needed */
}
`;


export const InnerLayout = styled.div`
padding: 2rem 1.5rem;
width: 100%;
overflow: hidden;

@media (max-width: 768px) {
    /* Adjust styles for screens with a maximum width of 768px */
    padding: 1rem; /* Reduce padding for small screens, adjust as needed */
}
`;
