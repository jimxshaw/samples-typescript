interface IProductListModel 
{
    title: string;
    showImage: boolean;
    // Whenever the type isn't known, the any keyword can be used.
    // However, best practices state a specific type should be used.
    products: any[];     
}