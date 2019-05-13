module.exports = [

    {
        nombre: "Contable",
        incluye: ["Contabilidad", "Impuestos", "Facturación Electrónica", "Estados Financieros", "Parametrización", "Cartera, Cobros", "Proovedores", "Ventas de Servicios"],
        precio: 80000,
        empleados: 5,
        horas: 10,
        transac: 25,


    },

    {
        nombre: "Básico",
        anexo: "Paquete contable +",
        incluye: ["Inventarios", "Gestión de Ventas", "Gestión de Compras"],
        precio: 120000,
        especial: true,
        empleados: 10,
        horas: 10,
        transac: 50,

    },

    {
        nombre: "Pymes",
        anexo: "Paquete básico +",
        incluye: ["Activos Fijos", "Gestión de Compras", "Liquidación Comisiones", "POS Autonómo", "Dispositivos Móviles"],
        precio: 150000,
        empleados: 10,
        horas: 15,
        transac: 100,
        
    },

    {
        nombre: "Premium",
        anexo: "Paquete Pymes +",
        incluye: ["Mercancía en Consignación", "Control de Inventarios", "Recetas, ensambles, etc"],
        precio: 200000,
        empleados: 15,
        horas: 20,
        transac: 500,

    }, 
]