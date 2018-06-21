using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace e_commerce.Migrations
{
    public partial class AddDateAndOrderModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DisplayDate",
                table: "orders",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "OrderedAt",
                table: "orders",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DisplayDate",
                table: "orders");

            migrationBuilder.DropColumn(
                name: "OrderedAt",
                table: "orders");
        }
    }
}
