import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
    <ContentLoader
        speed={2}
        width={300}
        height={466}
        viewBox="0 0 300 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="10" ry="10" width="300" height="365" />
        <rect x="0" y="375" rx="10" ry="10" width="132" height="20" />
        <rect x="0" y="404" rx="10" ry="10" width="45" height="18" />
        <rect x="0" y="426" rx="10" ry="10" width="220" height="18" />
        <rect x="250" y="420" rx="10" ry="10" width="50" height="24" />
    </ContentLoader>
)

export default Skeleton