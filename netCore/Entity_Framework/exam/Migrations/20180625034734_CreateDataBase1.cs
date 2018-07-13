using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace login_registration.Migrations
{
    public partial class CreateDataBase1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(nullable: false),
                    FirstName = table.Column<string>(maxLength: 105, nullable: false),
                    LastName = table.Column<string>(maxLength: 105, nullable: false),
                    Password = table.Column<string>(maxLength: 105, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "activitys",
                columns: table => new
                {
                    _ActivityId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Date = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(maxLength: 105, nullable: false),
                    Duration = table.Column<int>(nullable: false),
                    DurationFormat = table.Column<string>(nullable: false),
                    Time = table.Column<DateTime>(nullable: false),
                    Title = table.Column<string>(maxLength: 105, nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_activitys", x => x._ActivityId);
                    table.ForeignKey(
                        name: "FK_activitys_users_UserId",
                        column: x => x.UserId,
                        principalTable: "users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "participants",
                columns: table => new
                {
                    ParticpantId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(nullable: false),
                    _ActivityId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_participants", x => x.ParticpantId);
                    table.ForeignKey(
                        name: "FK_participants_users_UserId",
                        column: x => x.UserId,
                        principalTable: "users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_participants_activitys__ActivityId",
                        column: x => x._ActivityId,
                        principalTable: "activitys",
                        principalColumn: "_ActivityId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_activitys_UserId",
                table: "activitys",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_participants_UserId",
                table: "participants",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_participants__ActivityId",
                table: "participants",
                column: "_ActivityId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "participants");

            migrationBuilder.DropTable(
                name: "activitys");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
