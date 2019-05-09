module.exports = [

    {
        nombre: "Contable",
        incluye: ["Contabilidad", "Impuestos", "Facturación Electrónica", "Estados Financieros", "Parametrización", "Cartera, Cobros", "Proovedores", "Ventas de Servicios"],
        precio: 80000,
        empleados: 5,
        horas: 10,


    },

    {
        nombre: "Básico",
        anexo: "Paquete contable +",
        incluye: ["Inventarios", "Gestión de Ventas", "Gestión de Compras", "50 transacciones electrónicas"],
        precio: 120000,
        especial: true,
        empleados: 10,
        horas: 10,
    },

    {
        nombre: "Pymes",
        anexo: "Paquete básico +",
        incluye: ["Activos Fijos", "Gestión de Compras", "Liquidación Comisiones", "POS Autonómo", "Dispositivos Móviles", "100 transacciones electrónicas"],
        precio: 150000,
        empleados: 10,
        horas: 15,
        
    },

    {
        nombre: "Premium",
        anexo: "Paquete Pymes +",
        incluye: ["Mercancía en Consignación", "Control de Inventarios", "Recetas, ensambles, etc", "500 transacciones electrónicas"],
        precio: 200000,
        empleados: 15,
        horas: 20,
    }, 
]