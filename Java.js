<script>
if (typeof toggleSidebar !== 'function') {
  function toggleSidebar() {
    const bd = document.getElementById('backdrop');
    const sb = document.getElementById('sidebar');
    const content = document.querySelector('.content');

    if (sb) sb.classList.toggle('open');
    if (bd) bd.classList.toggle('visible');
    if (content) content.classList.toggle('shifted'); // <-- push content
  }
}
</script>
