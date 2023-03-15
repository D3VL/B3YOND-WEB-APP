export default function Footer() {
    return (
        <div class="footer text-center p-3">
            <small>©{new Date().getFullYear()} <a href="https://d3vl.com" className="d3vl-link">D3VL LTD</a></small>
            <br />
            <small className="text-muted">Ver: 1.0.3</small>
        </div>
    );
}