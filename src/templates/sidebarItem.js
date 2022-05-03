const sidebarItem = ({id, title, href}) => `
    <li class="nav-item">
        <a href="${href}" class="nav-link align-middle px-0" id=${id}>
            <span class="ms-1 d-none d-sm-inline">${title}</span>
        </a>
    </li>
`;

export default sidebarItem;